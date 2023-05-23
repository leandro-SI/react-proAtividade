using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepo _atividadeRepo;

        public AtividadeService(IAtividadeRepo atividadeRepo)
        {
            _atividadeRepo = atividadeRepo;
        }

        public async Task<Atividade> AdicionarAtividade(Atividade model)
        {
            if (await _atividadeRepo.GetByTituloAsync(model.Titulo) != null)
                throw new Exception("Já existe uma atividade com esse título.");

            if (await _atividadeRepo.GetByIdAsync(model.Id) == null)
            {
                _atividadeRepo.Adicionar(model);
                if (await _atividadeRepo.SalvarMudancasAsync())
                    return model;
            }

            return null;
        }

        public async Task<Atividade> AtualizarAtividade(Atividade model)
        {
            if (model.DataConclusao != null)
                throw new Exception("Não se pode alterar atividade já concluída.");

            if (await _atividadeRepo.GetByIdAsync(model.Id) != null)
            {
                _atividadeRepo.Atualizar(model);
                if (await _atividadeRepo.SalvarMudancasAsync())
                    return model;
            }

            return null;
        }

        public async Task<bool> ConcluirAtividade(Atividade model)
        {
            if (model != null)
            {
                model.Concluir();
                _atividadeRepo.Adicionar<Atividade>(model);
                return await _atividadeRepo.SalvarMudancasAsync();
            }

            return false;
        }

        public async Task<bool> DeletarAtividade(long atividadeId)
        {
            var atividade = await _atividadeRepo.GetByIdAsync(atividadeId);

            if (atividade == null) throw new Exception("Atividade que tentou deletar não existe.");

            _atividadeRepo.Deletar<Atividade>(atividade);

            return await _atividadeRepo.SalvarMudancasAsync();
                
        }

        public async Task<Atividade> PegarAtividadePorIdAsync(long atividadeId)
        {
            try
            {
                var atividade = await _atividadeRepo.GetByIdAsync(atividadeId);

                if (atividade == null) return null;

                return atividade;
            }
            catch (Exception error)
            {
                throw new Exception(error.Message);
            }
        }

        public async Task<List<Atividade>> PegarTodasAtividadesAsync()
        {
            try
            {
                var atividades = await _atividadeRepo.GetTodasAsync();

                if (atividades == null) return null;

                return atividades;
            }
            catch (Exception _error)
            {
                throw new Exception(_error.Message);
            }
        }
    }
}
