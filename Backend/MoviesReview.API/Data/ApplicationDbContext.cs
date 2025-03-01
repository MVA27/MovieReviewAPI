namespace MovieReview.API.Data;

using Microsoft.EntityFrameworkCore;
using MovieReview.API.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<MoviesModel> MovieTable { get; set; }

}