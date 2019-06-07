using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SocialVU.Models
{
    [Table("Messages")]
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}