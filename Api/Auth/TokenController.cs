using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace LeanAspNetCore.Api.Auth
{
    public class TokenController : Controller
    {
        public const string Secret = "This is my super secret key!!!!";
        public const string Issuer = "leanaspnetcore";
        public const string Audience = "leanaspnetcore";

        [HttpGet("api/auth/randomtoken")]
        public IActionResult RandomToken()
        {
            var id = Guid.NewGuid().ToString();
            var claims = new[]
            {
                new Claim("sub", id),
                new Claim("name", $"Random user {id}")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: Issuer,
                audience: Audience,
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}