using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class User : BaseEntity
    {
        public User()
        {
            Attending = new List <Guest>();
            Owning = new List <Wedding>();
        }

        public int UserId { get; set; }
    
        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public List<Guest> Attending { get; set; }
        public List<Wedding> Owning { get; set; }
    }

    public class RegisterVM : BaseEntity
    {
        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string RegEmail { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string RegPassword { get; set; }

        [Required]
        [Compare("RegPassword")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }

    public class LoginVM : BaseEntity
    {
        [Required]
        [EmailAddress]
        public string LoginEmail { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string LoginPassword { get; set; }
    }

    public class Wrapper : BaseEntity
    {
        public RegisterVM Register { get; set; }
        public LoginVM Login { get; set; }
    }
}
