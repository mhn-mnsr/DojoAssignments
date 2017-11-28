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
    public class WeddingsController : Controller
    {
        private WeddingPlannerContext _context;
        public WeddingsController(WeddingPlannerContext context)
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

            User CurrentUser = _context.Users.SingleOrDefault(u => u.UserId == UserId);
            // List<Wedding> NewWedding = new List<Wedding>();
            List<Wedding> NewWedding = _context.Weddings.Include(g=>g.Guests).Where(w=>w.WeddingId > 0).ToList();
            
            ViewBag.WeddingInfo = NewWedding;
            ViewBag.UserInfo = UserId;
            return View("DisplayAll");
        }
        // Need to create view for Planwedding form!
        [HttpPost]
        [Route("CreateWedding")]
        public IActionResult CreateWedding(WeddingVM model)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
            {
                return RedirectToAction("Index", "Users");
            }

            else {
                    if (ModelState.IsValid)
                    {
                        Wedding NewCreation = new Wedding();
                        NewCreation.UserId = (int) UserId;
                        NewCreation.WedderOne = model.Wedder1;
                        NewCreation.WedderTwo = model.Wedder2;
                        NewCreation.Date = model.Date;
                        NewCreation.Address = model.Address;
                        _context.Weddings.Add(NewCreation);
                        _context.SaveChanges();
                        int WeddingId = _context.Weddings.Last().WeddingId;
                        // HttpContext.Session.SetInt32("WeddingId",WeddingId);
                        return Redirect($"SingleWedding/{WeddingId}");
                    }
                }
                return View("PlanWedding", model);

        }
        [HttpGet]
        [Route("PlanWedding")]
        public IActionResult PlanWedding()
        {
            return View();
        }


        [HttpGet]
        [Route("SingleWedding/{WeddingId}")]
        public IActionResult SingleWedding(int WeddingId)
        {
            // int WeddingId = HttpContext.Session.GetInt32("WeddingId");
            Wedding DisplaySingleWedding = _context.Weddings.SingleOrDefault(w=>w.WeddingId == WeddingId);
            ViewBag.WeddingInfo = DisplaySingleWedding;
            return View("SingleWedding");
        }

        [HttpGet]
        [Route("DeleteWedding/{WeddingId}")]
        public IActionResult DeleteWedding(int WeddingId)
        {
            Wedding DeleteWedding = _context.Weddings.SingleOrDefault(dw => dw.WeddingId == WeddingId);
            _context.Weddings.Remove(DeleteWedding);
            _context.SaveChanges();
            return RedirectToAction("DisplayAll");
        }

        [HttpGet]
        [Route("RSVP/{WeddingId}")]
        public IActionResult RSVP(int WeddingId)
        {
            Guest guest = new Guest();
            int? UserId = HttpContext.Session.GetInt32("UserId");
            guest.UserId = (int)UserId;
            guest.WeddingId = WeddingId;
            _context.Guests.Add(guest);
            _context.SaveChanges();
            return RedirectToAction("DisplayAll");
        }
        
        [HttpGet]
        [Route("unRSVP/{WeddingId}")]
        public IActionResult UnRSVP(int GuestId, int WeddingId)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
            {
                return RedirectToAction("Index", "Users");
            }
            Guest guest = _context.Guests.Where(dw=>dw.WeddingId == WeddingId)
                        .Where(dw=>dw.UserId == GuestId)
                        .SingleOrDefault();
            
            // guest.UserId = (int)UserId;
            // guest.WeddingId = WeddingId;
            _context.Guests.Remove(guest);
            _context.SaveChanges();
            return RedirectToAction("DisplayAll");
        }
    }
}