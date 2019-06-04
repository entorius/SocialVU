using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SocialVU.Models
{
    public class SocialVUContext: DbContext
    {
        public SocialVUContext() : base()
        {
        }

        public DbSet<News> News { get; set; }
        public DbSet<User> Users { get; set; }
    }
}