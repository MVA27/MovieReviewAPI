namespace MovieReview.API.Data;

using Microsoft.EntityFrameworkCore;
using MovieReview.API.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<MoviesModel> MovieTable { get; set; }
    //public DbSet<CommentsModel> CommentsTable { get; set; }

    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{
    //    modelBuilder.Entity<MoviesModel>()
    //        .HasMany(row => row.Comments)
    //        .WithOne(row => row.MovieNavProp)
    //        .HasForeignKey(row => row.MovieId)
    //        .OnDelete(DeleteBehavior.Cascade); // Optional: Deletes comments when movie is deleted
        
    //    modelBuilder.Entity<MoviesModel>().HasData(
    //        new MoviesModel { Id = 1, Name = "Fauda" }
    //    );

    //    modelBuilder.Entity<CommentsModel>().HasData(
    //        new CommentsModel { Id = 1, MovieId = 1, Text = "One of the best" },
    //        new CommentsModel { Id = 2, MovieId = 1, Text = "Must watch" }

    //    );


    //}

}