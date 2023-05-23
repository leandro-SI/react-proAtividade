using ProAtividade.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividade(Atividade model);
        Task<Atividade> AtualizarAtividade(Atividade model);
        Task<bool> DeletarAtividade(long atividadeId);
        Task<bool> ConcluirAtividade(Atividade model);
        Task<List<Atividade>> PegarTodasAtividadesAsync();
        Task<Atividade> PegarAtividadePorIdAsync(long atividadeId);
    }
}
