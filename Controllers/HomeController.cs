using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LiveStreamsApp.Controllers
{
    // https://localhost:5001/api/sampleData/weatherForecasts
    [Route("api/[controller]")]
    public class HomeController : Controller
    {

        [HttpGet("[action]")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
