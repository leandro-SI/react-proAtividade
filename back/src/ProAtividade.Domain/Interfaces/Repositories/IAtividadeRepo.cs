using ProAtividade.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeralRepo
    {
        Task<List<Atividade>> GetTodasAsync();
        Task<Atividade> GetByIdAsync(long id);
        Task<Atividade> GetByTituloAsync(string titulo);
    }
}
