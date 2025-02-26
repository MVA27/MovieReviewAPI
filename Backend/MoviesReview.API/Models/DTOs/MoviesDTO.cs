namespace MovieReview.API.Models.DTOs;

public class MoviesDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<CommentsModel> Comments { get; set; } = new();
}