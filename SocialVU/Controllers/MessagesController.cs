using SocialVU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace SocialVU.Controllers
{
    public class MessagesController : Controller
    {
        private SocialVUContext db = new SocialVUContext();

        [HttpPost]
        [Route("messages/received")]
        public JsonResult Received(User user)
        {
            return Json(db.Messages.ToList().FindAll(m => m.To == user.Email));
        }

        [HttpPost]
        [Route("messages/sent")]
        public JsonResult Sent(User user)
        {
            return Json(db.Messages.ToList().FindAll(m => m.From == user.Email));
        }
        
        [HttpPost]
        public ActionResult Send(Message message)
        {
            var receiver = db.Users.FirstOrDefault(u => u.Email == message.To);

            if(receiver == null)
            {
                return new HttpNotFoundResult("Receiver not found");
            }

            db.Messages.Add(message);
            db.SaveChanges();

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}