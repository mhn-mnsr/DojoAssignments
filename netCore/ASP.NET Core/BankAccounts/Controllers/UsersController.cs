using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using BankAccounts.Models;
using System.Linq;

namespace BankAccounts.Controllers
{
    public class UsersController : Controller
    {
        private BankAccountContext _context;
 
    	public UsersController(BankAccountContext context)
    	{
        _context = context;
    	}
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Register()
        {
            RegisterViewModel model = new RegisterViewModel();

            return View(model);
        }
        
        [HttpPost]
        [Route("RegisterUser")]
        public IActionResult RegisterUser(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                User newUser = new User();
                newUser.password = Hasher.HashPassword(newUser, model.password);
                newUser.FirstName = model.FirstName;
                newUser.LastName = model.LastName;
                newUser.email = model.email;
                newUser.Balance = 1000.00;
                newUser.CreatedAt = DateTime.Now;
                newUser.UpdatedAt = DateTime.Now;
                _context.users.Add(newUser);
                _context.SaveChanges();
                int UserId = _context.users.Last().usersId;
                HttpContext.Session.SetInt32("UserId", UserId);
                return RedirectToAction("DisplayAll", "Transactions");
            }
            return View("Register", model);
        }

        [HttpGet]
        [Route("login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [Route("loginUser")]
        public IActionResult loginUser(string email, string password)
        {
            User user = _context.users.SingleOrDefault(u => u.email == email);
            if (user != null && password != null)
            {
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(user, user.password, password))
                {
                    HttpContext.Session.SetInt32("UserId", user.usersId);
                    return Redirect("DisplayAll");
                }
            }
            TempData["Error"] = "Invalid Email/Password Combination";
            return View("Login");
        }
    }
}
