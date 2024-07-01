using Microsoft.AspNetCore.Identity;

namespace API.Entites
{
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}