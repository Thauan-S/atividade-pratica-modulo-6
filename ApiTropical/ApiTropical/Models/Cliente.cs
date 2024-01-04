using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiTropical.Models
{
    [Table("Clientes")]
    public class Cliente
    {
        public Cliente() { 
         Contatos =new Collection<Contato>();
         Reservas =new Collection<Reserva>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string  Nome {  get; set; }
        [Required]
        [StringLength(15)]
        public string Telefone { get; set; }
        [Required]
        public  DateTime DataNascimento { get; set; }
        [Required]
        [StringLength(50)]
        public string Email {  get; set; }
        [Required]
        [StringLength(15)]
        public string Senha { get; set; }
        [Required]
        [StringLength(8)]
        public string Cep {  get; set; }
        public  ICollection<Contato> Contatos{ get; set; }
        public ICollection <Reserva> Reservas { get; set; }

    }
}
