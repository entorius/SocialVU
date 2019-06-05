using SocialVU.Models;
using System.Linq;
using System.Net;
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

        [HttpPut]
        public ActionResult Change(User user)
        {
            var userInDb = db.Users.FirstOrDefault(u => u.Email == user.Email);
            if(userInDb != null)
            {
                userInDb.Password = user.Password;
                db.SaveChanges();

                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }

            return new HttpNotFoundResult();
        }
    }
}