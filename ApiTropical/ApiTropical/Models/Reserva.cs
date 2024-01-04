using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiTropical.Models
{
    [Table("Reserva")]
    public class Reserva
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime DataReserva {  get; set; }
        [Required]
        public DateTime DataViagem { get; set; }
        [Required]
        public int ClienteId  { get; set; }
        [JsonIgnore]
        public Cliente Cliente { get; set; }
        [Required]
        public int PacoteDeViagemId { get; set; }
        [JsonIgnore]
        public PacoteDeViagem PacoteDeViagem { get; set; }

    }
}
