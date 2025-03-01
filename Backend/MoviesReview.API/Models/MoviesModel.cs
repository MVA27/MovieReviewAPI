using System.ComponentModel.DataAnnotations;

namespace MovieReview.API.Models;

public class MoviesModel
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(20)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string Review { get; set; } = string.Empty;
}
