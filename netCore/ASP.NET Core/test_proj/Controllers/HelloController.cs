using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace testproj.Controllers
{
    public class HelloController : Controller
    {
        [HttpGet]
        [Route("{FirstName}/{LastName}/{Age}/{FavoriteColor}")]
        public JsonResult DisplaySomeone(string FirstName, string LastName, string Age, string FavoriteColor)
        {
            var AnonObject = new {
                                FirstName = FirstName,
                                LastName = LastName,
                                Age = Age,
                                FavoriteColor = FavoriteColor
                            };
            return Json(AnonObject);
        }

 
        public IActionResult Index()
        {
            return View();
            //OR
            return View("Index");
        }          
    }
}