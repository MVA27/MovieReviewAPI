using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MovieReview.API.Models;

public class CommentsModel
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Text { get; set; } = string.Empty;

    [Required]
    public int MovieId { get; set; }

    [ForeignKey("MovieId")]
    [JsonIgnore]
    public MoviesModel? MovieNavProp { get; set; }
}
