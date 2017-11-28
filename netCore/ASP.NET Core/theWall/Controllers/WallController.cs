using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using theWall.Models;

namespace theWall.Controllers
{

    public class WallController : Controller
    {
        private readonly DbConnector _dbConnector;
        
        public WallController(DbConnector connect)
        {
            _dbConnector = connect;
        }

        [HttpGet]
        [Route("theWall")]
        public IActionResult Wall()
        {
            ViewBag.Errors= TempData["Errors"];

            // Get users name
            int? UserId= HttpContext.Session.GetInt32("id");
            string IdQuery = ($"Select * from users where id = '{UserId}'");
            var GrabId = _dbConnector.Query(IdQuery);
            ViewBag.User = GrabId;

            // Get message info
            string MessageQuery = ($"SELECT messages.id, CONCAT(users.FirstName, ' ', users.LastName) AS message_author, messages.created_at, messages.users_id, messages.message FROM messages JOIN users on users.id = messages.users_id ORDER BY messages.id DESC");
            var allMessages = _dbConnector.Query(MessageQuery);
            ViewBag.AllMessages = allMessages;

            string CommentQuery = ($"SELECT comments.messages_id, CONCAT(users.FirstName, ' ',users.LastName) AS comment_author, comments.created_at, comments.comment FROM comments JOIN users ON users.id = comments.users_id JOIN messages ON messages.id = comments.messages_id");
            var allComments = _dbConnector.Query(CommentQuery);
            ViewBag.AllComments = allComments;

            return View("Wall");
        }

        [HttpPost]
        [Route("post_message")]
        public IActionResult post_message(string message)
        {
            Message newMessage = new Message();
            newMessage.message = message;
            int? UserId = HttpContext.Session.GetInt32("id");
            List<string> allErrors = new List<string>();

            if (ModelState.IsValid)
            {
                string query = ($"Insert into messages (message, created_at, updated_at, users_id) VALUES('{newMessage.message}', NOW(), NOW(), '{UserId}'");
                _dbConnector.Execute(query);
                return RedirectToAction("Wall");
            }
            foreach (var i in ModelState.Values)
            {
                if(i.Errors.Count > 0 )
                {
                    allErrors.Add(i.Errors[0].ErrorMessage.ToString());
                }
            }
            TempData["Errors"] = allErrors;
            return RedirectToAction("Wall");
        }

        [HttpPost]
        [Route("post_comment/{id}")]
        public IActionResult post_comment(string comment)
        {
            Comment newComment = new Comment();
            newComment.comment = comment;
            int? UserId = HttpContext.Session.GetInt32("id");
            List<string> allErrors = new List <string>();
            if (ModelState.IsValid)
            {
                string query  = ($"Insert into comments (comment, created)at, updated_at, users_id) VALUES('{newComment.comment}', NOW(), NOW(), '{UserId}'");
                _dbConnector.Execute(query);
                return RedirectToAction("Wall");
            }
            // If validation fails
            foreach (var i in ModelState.Values)
            {
                if (i.Errors.Count > 0)
                {
                    allErrors.Add(i.Errors[0].ErrorMessage.ToString());
                }
            }
            TempData["Errors"] = allErrors;
            return RedirectToAction("Wall");
        }

        [HttpPost]
        [Route("delete_post/{id?}")]
        public IActionResult delete_post(string id = null) 
        {
            string DeleteQuery = ($"DELETE FROM comments WHERE messages_id = '{id}'");
            _dbConnector.Execute(DeleteQuery);

            string query = ($"DELETE FROM messages WHERE id = '{id}'");
            _dbConnector.Execute(query);

            return RedirectToAction("Wall");
        }
    }
}