using System.Collections.Generic;
using System.Threading.Tasks;

using Api.Middlewares;
using Api.Models;

using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        static List<string> Usernames = new List<string>() { "Alex", "Ann", "Kate" };

        [HttpGet("users")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Usernames;
        }

        [HttpPost("login")]
        public async Task<ActionResult> PostAsync([FromBody] Username username)
        {
            Usernames.Add(username.Name);
            await UsernamesMiddleware.Send(username.Name);
            return Ok(Usernames);
        }
    }
}
