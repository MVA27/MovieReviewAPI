using System.ComponentModel.DataAnnotations;

namespace MovieReview.API.Models;

public class MoviesModel
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public List<CommentsModel> Comments { get; set; } = new();
}
