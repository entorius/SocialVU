﻿using SocialVU.Models;
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
            return View();
        }
    }
}