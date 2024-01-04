using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiTropical.Models
{
    [Table("PacoteDeViagem")]
    public class PacoteDeViagem
    {
        public PacoteDeViagem() {
            Resevas = new Collection<Reserva>();
        } 
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Destino { get; set; }
        [Required]
        [StringLength(200)]
        public string Descricao { get; set; }
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Preco {  get; set; }
        [Required]
        public int DuracaoEmDias { get; set; }
        [Required]
        public string Imagem { get; set; }
        [Required]
        public string Categoria { get; set; }
        public ICollection<Reserva> Resevas { get; set; }

    }
}
