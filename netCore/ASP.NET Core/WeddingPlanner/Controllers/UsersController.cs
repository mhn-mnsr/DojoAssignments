using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using WeddingPlanner.Models;
using System.Linq;

namespace WeddingPlanner.Controllers
{
    public class UsersController : Controller
    {
        private WeddingPlannerContext _context;
 
    	public UsersController(WeddingPlannerContext context)
    	{
        _context = context;
    	}
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index ()
        {
            return View();
        }

        [HttpPost]
        [Route("RegisterUser")]
        public IActionResult RegisterUser(Wrapper regModel)
        {
            RegisterVM user = regModel.Register;
            if (ModelState.IsValid)
            {
                List<User> CurrentUser = _context.Users.Where(u => u.Email == user.RegEmail).ToList();

                if (CurrentUser.Count > 0)
                {
                    TempData["EmailError"] = "Email already been used";
                    return View("Index", regModel);
                }
                else
                {
                PasswordHasher<RegisterVM> Hasher = new PasswordHasher<RegisterVM>();
                User newUser = new User();
                newUser.Password = Hasher.HashPassword(user, user.RegPassword);
                newUser.FirstName = user.FirstName;
                newUser.LastName = user.LastName;
                newUser.Email = user.RegEmail;
                _context.Users.Add(newUser);
                _context.SaveChanges();
                int UserId = _context.Users.Last().UserId;
                HttpContext.Session.SetInt32("UserId", UserId);
                return RedirectToAction("DisplayAll", "Weddings");
                }
            }
            return View("Register", regModel);
        }

        [HttpPost]
        [Route("loginUser")]
        public IActionResult loginUser(Wrapper loginModel)
        {
            if (loginModel.Login.LoginEmail == null && loginModel.Login.LoginPassword == null)
            {
                return View ("Index", loginModel);
            }
            LoginVM user = loginModel.Login;
            User TestUser = _context.Users.SingleOrDefault(u => u.Email == user.LoginEmail);
            if (TestUser == null)
            {
                TempData["LoginError"] = "Username or Password is incorrect";
                return View ("Index", loginModel);
            }
            else
            {
                if(user.LoginEmail != TestUser.Email)
                {
                    TempData["LoginError"] = "Username or Password is incorrect";
                    return View("Index", loginModel);
                }
                else
                {
                    var Hasher = new PasswordHasher<User>();
                    if(0 != Hasher.VerifyHashedPassword(TestUser, TestUser.Password, user.LoginPassword))
                    {
                        HttpContext.Session.SetInt32("UserId", TestUser.UserId);
                        return RedirectToAction("DisplayAll", "Weddings");
                        
                    }
                    else
                    {
                        TempData["LoginError"] = "Username or Password is incorrect";
                        return View("Index", loginModel);   
                    }
                }
            }
        }
    }
}