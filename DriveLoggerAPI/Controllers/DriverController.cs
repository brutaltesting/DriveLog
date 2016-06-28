using System.Collections.Generic;
using System.Web.Http;
using DriveLoggerAPI.Models;
using Newtonsoft.Json;

namespace DriveLoggerAPI.Controllers
{

    public class DriverController : ApiController
    {
        // GET: api/Driver
        public IEnumerable<DriverModel> Get()
        {
            var driver1 = new DriverModel { id = 1, name = "Klas Floda", socialsec = "781201-1122" };
            var driver2 = new DriverModel { id = 2, name = "Kanne Kivi", socialsec = "781001-1020" };
            var dr1 = JsonConvert.SerializeObject(driver1);
            var dr2 = JsonConvert.SerializeObject(driver2);
            return new List<DriverModel>() { driver1, driver2 };
        }

        // GET: api/Driver/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Driver
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Driver/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Driver/5
        public void Delete(int id)
        {
        }
    }
}
