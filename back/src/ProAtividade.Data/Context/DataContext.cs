using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Mappings;
using ProAtividade.Domain.Entities;

namespace ProAtividade.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Atividade> Atividades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AtividadeMap());
        }
    }
}
