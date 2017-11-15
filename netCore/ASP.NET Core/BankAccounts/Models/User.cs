using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BankAccounts.Models;

namespace BankAccounts
{
    public class User
    {
        [Key]
        public int usersId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public double Balance { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public List <Transaction> Transactions { get; set; }
        public User()
        {
            Transactions = new List<Transaction>();
        }
    }

}