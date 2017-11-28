using Microsoft.EntityFrameworkCore;
 
namespace entityTestProj.Models
{
    public class SampleContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public SampleContext(DbContextOptions<SampleContext> options) : base(options) { }
    }
}
