using ApiTropical.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiTropical.Context
{
    public class ApiDbContext : DbContext

    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options):base(options) {
           
        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Contato> Contatos { get; set;}
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<PacoteDeViagem> PacoteDeViagems { get; set; }
    }
}
