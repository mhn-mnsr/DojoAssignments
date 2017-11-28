using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using LoginRegistration.Models;
using LoginRegistration;

namespace LoginRegistration.Controllers
{
    public class UsersController : Controller
    {
        private readonly DbConnector _dbConnector;
 
        public UsersController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        private List<string> errors = new List<string>();

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if(TempData["errors"] != null){
                ViewBag.ErrorMessages = TempData["errors"];
            }
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(User user)
        {
            if(ModelState.IsValid)
            {
                _dbConnector.Execute($"Insert into User(FirstName, LastName, email, password) VALUES ('{user.FirstName}', '{user.LastName}', '{user.Email}','{user.Password}')");
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
            return RedirectToAction("Index");
        }
        

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string email, string password)
        {
            var EmailExists = _dbConnector.Query($"Select * from User where email = '{email}'");
            if (EmailExists.Count == 0)
            {
                TempData["EmailError"] = "This username does not exist";
                return View("Index");
            }
            else
            {
                var UserMatch = _dbConnector.Query($"Select * from User where email = '{email}' and password ='{password}'");
                if(UserMatch.Count == 0)
                {
                    TempData["PasswordError"] = "Incorrect Password";
                    return RedirectToAction("Index");
                }
                else
                {
                    return RedirectToAction("Success");
                }
            }
        }
        [HttpGet]
        [Route("Success")]
        public IActionResult Success()
        {
            return View();
        }  
    }
}