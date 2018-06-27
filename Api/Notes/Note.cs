using System;
using System.ComponentModel.DataAnnotations;

namespace LeanAspNetCore.Api.Notes
{
    public class Note
    {
        public string Id { get; set; }
        
        [Required]
        [MinLength(3)]
        [MaxLength(100)]
        public string Title { get; set; }
        
        [Required]
        [MaxLength(1000)]
        public string Content { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}