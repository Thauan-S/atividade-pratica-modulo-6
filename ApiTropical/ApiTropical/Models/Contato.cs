using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiTropical.Models
{
    [Table("Contato")]
    public class Contato
    {
    
        [Key]
         public int  Id {  get; set; }
        [Required]
        public string Assunto { get; set; }
        [Required]
        public string Mensagem { get; set; }
        [Required]
        public int ClienteId { get; set; }
        [JsonIgnore]
        public Cliente Cliente { get; set; }

    }
}
