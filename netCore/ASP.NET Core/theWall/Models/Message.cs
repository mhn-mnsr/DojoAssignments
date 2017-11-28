using System.ComponentModel.DataAnnotations;

namespace theWall.Models
{
    public class Message : BaseEntity
    {
        [Key]
        public int message_id { get ; set; }

        [Key]
        public int comments_messages_id { get; set;}

        [Required]
        public int users_id {get ; set ; }

        [Required]
        public string message { get; set; }
    }

    public class Comment : BaseEntity
    {
        [Required]
        public string comment { get ; set ; }

        [Required]
        public int id { get ; set ; }

        [Required]
        public int messages_id {get ; set; }
    }
    public class WallModels
    {
        public Message post_message {get;set;}
        public Comment post_comment {get;set;}
    }
}