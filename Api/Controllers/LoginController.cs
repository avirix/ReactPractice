using System.Collections.Generic;

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
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Post([FromBody] Username username)
        {
            Usernames.Add(username.Name);
            return Ok(Usernames);
        }
    }
}
