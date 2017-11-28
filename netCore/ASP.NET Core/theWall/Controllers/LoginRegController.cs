using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using theWall.Models;
using theWall;

namespace theWall.Controllers
{
    public class LoginRegController : Controller
    {
        private readonly DbConnector _dbConnector;
 
        public LoginRegController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        private List<string> errors = new List<string>();

        [HttpGet]
        [Route("")]
        public IActionResult LoginReg()
        {
            if(TempData["errors"] != null){
                ViewBag.ErrorMessages = TempData["errors"];
            }
            return View("LoginReg");
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterUser user)
        {
            if(ModelState.IsValid)
            {
                _dbConnector.Execute($"Insert into users(FirstName, LastName, Email, Password) VALUES ('{user.FirstName}', '{user.LastName}', '{user.Email}','{user.Password}')");
                TempData["errors"] = null;
                return RedirectToAction("Success");
            }
            else
            {
                foreach(var error in ModelState.Values)
                {
                    if(error.Errors.Count > 0)
                    {
                        errors.Add(error.Errors[0].ErrorMessage);
                    }
                }
                TempData["errors"] = errors;
            }
            return RedirectToAction("LoginReg");
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginUser user)
        {
            
        
            var EmailExists = _dbConnector.Query($"Select * from users where email = '{user.Email}'");
            if (EmailExists.Count == 0)
            {
                TempData["EmailError"] = "This username does not exist";
                return View("LoginReg");
            }
            else
            {
                var UserMatch = _dbConnector.Query($"Select * from users where email = '{user.Email}' and password ='{user.Password}'");
                if(UserMatch.Count == 0)
                {
                    TempData["PasswordError"] = "Incorrect Password";
                    return RedirectToAction("LoginReg");
                }
                else
                {
                    System.Console.WriteLine("Inside login success");
                    HttpContext.Session.SetInt32("id", UserMatch[id]); 
                    return RedirectToAction("Success");

                }
            }
        }

        [HttpGet]
        [Route("Success")]
        public IActionResult Success()
        {
            System.Console.WriteLine("Success");
            // return View("Wall", "Wall");
            return RedirectToAction("Wall", "Wall");
        }

    }
}