using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Wedding : BaseEntity
    {
        public Wedding()
        {
            Guests = new List <Guest>();
        }
        [Key]
        public int WeddingId { get; set; }
        public string WedderOne { get; set; }
        public string WedderTwo { get; set; }
        public DateTime Date { get; set; }
        public int UserId{ get; set; }
        public User User { get; set; }
        public string Address { get; set; }
        public List<Guest> Guests { get; set; }
    }
    public class WeddingVM : BaseEntity
    {
        [Required]
        [MinLength(2)]
        public string Wedder1 { get; set; }

        [Required]
        [MinLength(2)]
        public string Wedder2 { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Address { get; set; }
    }
}