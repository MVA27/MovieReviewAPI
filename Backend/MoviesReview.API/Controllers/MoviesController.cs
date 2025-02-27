using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieReview.API.Data;
using MovieReview.API.Models;
using MovieReview.API.Models.DTOs;
using MoviesReview.API.Constants;
using MoviesReview.API.Models.DTOs;

namespace MovieReview.API.Controllers;

[ApiController]
[Route("/movies")]
public class MoviesController : Controller
{
    private readonly ApplicationDbContext _db;

    public MoviesController(ApplicationDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<List<MoviesDTO>>> GetAllMoviesAsync() {

        var movies = await _db.MovieTable
            .Select(row => new MoviesDTO
            {
                Id = row.Id,
                Name = row.Name,
                Comments = row.Comments
            }).ToListAsync();

        if(movies.Count == 0)
        {
            return NotFound(new ErrorResponse { Message = Message.NoMoviesFound });
        }

        return Ok(movies);
    }

    [HttpGet("{id:int}", Name = "GetMovieByIdAsync")]
    public async Task<ActionResult<MoviesDTO>> GetMovieByIdAsync([FromRoute] int id)
    {
        if (id <= 0)
        {
            return BadRequest(new ErrorResponse { Message = Message.InvalidId });
        }

        var movie = await _db.MovieTable
            .Where(row => row.Id == id)
            .Select(row => new MoviesDTO
            {
                Id = row.Id,
                Name = row.Name,
                Comments = row.Comments
            }).FirstOrDefaultAsync();

        if (movie == null)
        {
            return NotFound(new ErrorResponse { Message = Message.MovieDoesNotExist });
        }

        return Ok(movie);
    }

    [HttpPost]
    public async Task<IActionResult> AddMovieAsync([FromBody] MoviesDTO response)
    {

        if (string.IsNullOrWhiteSpace(response.Name))
        {
            return BadRequest(new ErrorResponse { Message = Message .InvalidInput });
        }

        var movie = new MoviesModel { Name = response.Name };
        await _db.MovieTable.AddAsync(movie);
        await _db.SaveChangesAsync();

        // Add comments if provided
        if (response.Comments != null && response.Comments.Any())
        {
            var comments = response.Comments
                .Select(c => new CommentsModel
                {
                    MovieId = movie.Id,
                    Text = c.Text
                }).ToList();

            await _db.CommentsTable.AddRangeAsync(comments);
            await _db.SaveChangesAsync();
        }

        return CreatedAtRoute("GetMovieByIdAsync", new { id = movie.Id }, movie);

    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteMovieAsync([FromRoute] int id)
    {

        if (id <= 0)
        {
            return BadRequest(new ErrorResponse{ Message = Message.InvalidId });
        }

        var movie = await _db.MovieTable.FindAsync(id);

        if (movie == null) return NotFound(new ErrorResponse{ Message = Message.MovieDoesNotExist });

        _db.MovieTable.Remove(movie);
        await _db.SaveChangesAsync();

        return NoContent();
    }

    [HttpPut("{movieId:int}/comments/{commentId:int}")]
    public async Task<IActionResult> UpdateCommentAsync(int movieId, int commentId, [FromBody] CommentsDTO updatedComment)
    {
        var comment = await _db.CommentsTable.FirstOrDefaultAsync(c => c.Id == commentId && c.MovieId == movieId);
        
        if (comment == null)
        {
            return NotFound(new ErrorResponse { Message = Message.CommentDoesNotExist });
        }

        // Update only the text
        comment.Text = updatedComment.Text;

        _db.CommentsTable.Update(comment);
        await _db.SaveChangesAsync();

        return Ok(comment);
    }

}
