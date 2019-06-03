using SocialVU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SocialVU.Controllers
{
    public class DefaultController : Controller
    {
        private SocialVUContext db = new SocialVUContext();
        
        // GET: Default
        public ActionResult Index()
        {
            var test = db.News.FirstOrDefault(n => n.Id == 1);
            return View();
        }
    }
}