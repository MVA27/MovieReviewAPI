using System.ComponentModel.DataAnnotations;

namespace MovieReview.API.Models;

public class MoviesModel
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Review { get; set; } = string.Empty;
}
