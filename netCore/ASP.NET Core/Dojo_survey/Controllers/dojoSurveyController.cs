using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dojo_survey.Controllers
{
    public class dojoSurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View("index");
        }

        [HttpPost]
        [Route("result")]
        public IActionResult Submit(string name, string location)
        {
        ViewBag.name = name;
        ViewBag.location = location;
        return View("result");
        }
    }
}