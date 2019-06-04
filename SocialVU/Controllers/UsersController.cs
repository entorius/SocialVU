using SocialVU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SocialVU.Controllers
{
    public class UsersController : Controller
    {
        private SocialVUContext db = new SocialVUContext();

        [HttpPost]
        public JsonResult Login(User user)
        {
            return Json(null != db.Users.FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password));
        }
    }
}