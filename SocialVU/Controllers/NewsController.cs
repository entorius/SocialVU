using SocialVU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SocialVU.Controllers
{
    public class NewsController : Controller
    {
        private SocialVUContext db = new SocialVUContext();

        public JsonResult List()
        {
            return Json(db.News.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}