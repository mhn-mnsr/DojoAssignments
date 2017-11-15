using System;
using System.ComponentModel.DataAnnotations;

namespace BankAccounts.Models
{
    public class Transaction
    {
        [Key]
        public int idTransactions { get; set; }
        public int usersId { get; set; }
        public User user { get; set; }
        public double amount { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}