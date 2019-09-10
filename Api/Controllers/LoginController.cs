using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        List<string> Usernames = new List<string>() { "Alex", "Ann", "Kate" };

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Usernames;
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] string value)
        {
            Usernames.Add(value);
            return Ok();
        }
    }
}
