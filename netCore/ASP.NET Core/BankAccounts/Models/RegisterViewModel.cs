using System.ComponentModel.DataAnnotations;

namespace BankAccounts.Models
{
    public class RegisterViewModel
    {
        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }

        [Required]
        [Compare("password")]
        [DataType(DataType.Password)]
        public string confirm_password { get; set; }
    }
}