using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using BankAccounts.Models;
using System.Linq;

namespace BankAccounts.Controllers
{
    public class TransactionsController : Controller
    {
        private BankAccountContext _context;
        public TransactionsController(BankAccountContext context)
    	{
        _context = context;
    	}

    [HttpGet]
    [Route("DisplayAll")]
    public IActionResult DisplayAll()
    {
        int? UserId = HttpContext.Session.GetInt32("UserId");
        if (UserId == null)
        {
            return RedirectToAction("Login", "Users");
        }
        User user = _context.users
                    .Include(u => u.Transactions)
                    .SingleOrDefault(u => u.usersId == UserId);
        if(user.Transactions != null)
        {
            user.Transactions = user.Transactions.OrderByDescending(ts => ts.CreatedAt).ToList();
        }
        ViewBag.UserInfo = user;
        return View("DisplayAll");
    }
        [HttpPost]
        [Route("Transaction")]
        public IActionResult Transaction(double amount)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
                {
                    return RedirectToAction("Login", "Users");
                }
            User user = _context.users.SingleOrDefault(u => u.usersId == UserId);

            Transaction newTransaction = new Transaction();
            newTransaction.amount = amount;
            newTransaction.usersId = (int)UserId;
            newTransaction.CreatedAt = DateTime.Now;
            newTransaction.UpdatedAt = DateTime.Now;
            
            user.Balance += amount;
            
            _context.transactions.Add(newTransaction);
            _context.SaveChanges();
            // if(newTransaction.amount <  user.Balance)
            //     {
            //         TempData["FundError"] = "Insufficient Funds";
            //     }
            ViewBag.UserInfo = user;
            ViewBag.AllTransactions = newTransaction;
            return RedirectToAction("DisplayAll");
        }

        [HttpGet]
        [Route("Logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("/");
        }
    }
}
