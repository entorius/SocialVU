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

        [HttpGet]
        [Route("messages/received/{id}")]
        public JsonResult Received(int id)
        {
            var userInDb = db.Users.FirstOrDefault(u => u.Id == id);

            if(userInDb != null)
            {
                return Json(db.Messages.ToList().FindAll(m => m.To == userInDb.Email), JsonRequestBehavior.AllowGet);
            }

            return Json(null);
        }

        [HttpGet]
        [Route("messages/sent/{id}")]
        public JsonResult Sent(int id)
        {
            var userInDb = db.Users.FirstOrDefault(u => u.Id == id);

            if (userInDb != null)
            {
                return Json(db.Messages.ToList().FindAll(m => m.From == userInDb.Email), JsonRequestBehavior.AllowGet);
            }

            return Json(null);
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