using System;
using System.ComponentModel.DataAnnotations;

namespace LeanAspNetCore.Api.Notes
{
    public class Note
    {
        public string Id { get; set; }
        
        [Required(ErrorMessage = "The title is required")]
        [MinLength(3, ErrorMessage = "The title must be at least 3 characters")]
        [MaxLength(100, ErrorMessage = "The title may not exceed 100 characters")]
        public string Title { get; set; }
        
        [Required(ErrorMessage = "The content is required")]
        [MaxLength(1000, ErrorMessage = "The content may not exceed 1000 characters")]
        public string Content { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}