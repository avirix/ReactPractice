using System;
using System.Collections.Concurrent;
using System.IO;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;

namespace Api.Middlewares
{
    public class UsernamesMiddleware
    {
        private readonly RequestDelegate _next;
        private static readonly ConcurrentDictionary<Guid, WebSocket> Sockets =
            new ConcurrentDictionary<Guid, WebSocket>();

        private static bool _invoked;

        public UsernamesMiddleware(RequestDelegate next)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
        }

        public async Task Invoke(HttpContext context)
        {
            var request = context.Request.Path.ToString();
            if (!context.WebSockets.IsWebSocketRequest || !request.Contains("/socket"))
            {
                await _next.Invoke(context);
                return;
            }

            var ct = context.RequestAborted;
            var currentSocket = await context.WebSockets.AcceptWebSocketAsync();
            var socketId = Guid.NewGuid();

            Sockets.TryAdd(socketId, currentSocket);

            _invoked = true;

            while (true)
            {
                if (ct.IsCancellationRequested)
                {
                    break;
                }

                string response;
                try
                {
                    response = await ReceiveStringAsync(currentSocket, ct);
                }
                catch (OperationCanceledException ex)
                {
                    Console.WriteLine(ex.Message);
                    break;
                }

                if (string.IsNullOrEmpty(response))
                {
                    if (currentSocket.State != WebSocketState.Open)
                    {
                        break;
                    }

                    continue;
                }

                await Send(response);
            }

            _invoked = false;

            Sockets.TryRemove(socketId, out WebSocket dummy);
            if (currentSocket.State != WebSocketState.Aborted)
            {
                await currentSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
            }

            currentSocket.Dispose();
        }

        public static async Task Send(string str)
        {
            try
            {
                if (_invoked)
                {
                    foreach (var item in Sockets)
                    {
                        if (item.Value == null) return;

                        if (item.Value?.State != WebSocketState.Open)
                        {
                            Console.WriteLine("Failed attempt to send (sockets)");
                            return;
                        }

                        await SendStringAsync(item.Value, str);
                    }
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Failed attempt to send (sockets)");
            }
        }

        private static Task SendStringAsync(WebSocket socket, string data, CancellationToken ct = default(CancellationToken))
        {
            var buffer = Encoding.UTF8.GetBytes(data);
            var segment = new ArraySegment<byte>(buffer);
            return socket.SendAsync(segment, WebSocketMessageType.Text, true, ct);
        }

        private static async Task<string> ReceiveStringAsync(WebSocket socket,
           CancellationToken ct = default(CancellationToken))
        {
            var buffer = new ArraySegment<byte>(new byte[8192]);
            using (var ms = new MemoryStream())
            {
                WebSocketReceiveResult result;
                do
                {
                    ct.ThrowIfCancellationRequested();

                    result = await socket.ReceiveAsync(buffer, ct);
                    ms.Write(buffer.Array, buffer.Offset, result.Count);
                } while (!result.EndOfMessage);

                ms.Seek(0, SeekOrigin.Begin);
                if (result.MessageType != WebSocketMessageType.Text)
                {
                    return null;
                }

                using (var reader = new StreamReader(ms, Encoding.UTF8))
                {
                    return await reader.ReadToEndAsync();
                }
            }
        }
    }
}
