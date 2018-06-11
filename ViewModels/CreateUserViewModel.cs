using System.ComponentModel.DataAnnotations;

namespace LeanAspNetCore.ViewModels
{
    public class CreateUserViewModel
    {
        [Required]
        [MaxLength(256)]
        public string Email { get; set; }

        [Required]
        [MinLength(10)]
        public string Password { get; set; }

        [Required]
        [Compare("Password")]
        [MinLength(10)]
        public string ConfirmPassword { get; set; }
    }
}
