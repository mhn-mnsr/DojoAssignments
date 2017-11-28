using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Guest : BaseEntity
    {
        [Key]
        public int GuestId { get; set; }
        public int WeddingId {get; set; }
        public Wedding Wedding { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}