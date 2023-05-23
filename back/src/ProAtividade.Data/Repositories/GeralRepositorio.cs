using ProAtividade.API.Data;
using ProAtividade.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAtividade.Data.Repositories
{
    public class GeralRepositorio : IGeralRepo
    {
        private readonly DataContext _dataContext;

        public GeralRepositorio(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Adicionar<T>(T entity) where T : class
        {
            _dataContext.Add(entity);
        }

        public void Atualizar<T>(T entity) where T : class
        {
            _dataContext.Update(entity);
        }

        public void Deletar<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public void DeletarVarias<T>(List<T> entities) where T : class
        {
            _dataContext.RemoveRange(entities);
        }

        public async Task<bool> SalvarMudancasAsync()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }
    }
}
