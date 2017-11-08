using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using formSubmission.Models;

namespace formSubmission.Controllers
{
    public class UserController : Controller
    {   
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.errors = TempData["Error"];
            return View();
        }

        [HttpPost]
        [Route("process")]
        public IActionResult Process(string fname, string lname, int age, string email, string password)
        {
            User NewUser = new User
            {
                FirstName = fname,
                LastName = lname,
                Age = age,
                Email = email, 
                Password = password

            };
            System.Console.WriteLine("*******");
            if (TryValidateModel(NewUser))
            {
                System.Console.WriteLine("inside valid");
                TempData["Error"] = "Success!";
                return RedirectToAction("Index");
            }
            else
            {
                System.Console.WriteLine("validator didnt work");
                List<string> theErrors = new List<string>();
                foreach(var error in ModelState.Values)
                {
                    if(error.Errors.Count > 0)
                    {
                        System.Console.WriteLine(theErrors);
                        theErrors.Add(error.Errors[0].ErrorMessage.ToString());
                    }
                }
                TempData["Error"] = theErrors;
                return RedirectToAction("Index");
                
            }
        }
        // [HttpGet]
        // [Route("success")]
        // public IActionResult Success()
        // {
        //     System.Console.WriteLine("InsideSuccess");
        //     return View();
        // }
    }
}



