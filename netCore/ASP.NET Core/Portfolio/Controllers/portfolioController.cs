using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class PortfolioController : Controller
    {
        [HttpGet]
        [Route("home")]
        public IActionResult Home()
        {
            return View("home");
        }
        [HttpGet]
        [Route("projects")]
        public IActionResult Project()
        {
            return View("projects");
        }
        [HttpGet]
        [Route("contact")]
        public IActionResult Contact()
        {
            return View("contact");
        }
    }
}