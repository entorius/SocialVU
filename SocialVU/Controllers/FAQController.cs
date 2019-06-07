using SocialVU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SocialVU.Controllers
{
    public class FAQController : Controller
    {
        private SocialVUContext db = new SocialVUContext();

        [HttpGet]
        public JsonResult List()
        {
            return Json(db.FAQs.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}