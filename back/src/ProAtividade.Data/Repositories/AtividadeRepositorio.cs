using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Data;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepositorio : GeralRepositorio, IAtividadeRepo
    {
        private readonly DataContext _dataContext;

        public AtividadeRepositorio(DataContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<Atividade> GetByIdAsync(long id)
        {
            IQueryable<Atividade> query = _dataContext.Atividades;

            query = query.AsNoTracking()
                        .OrderBy(x => x.Id)
                        .Where(a => a.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Atividade> GetByTituloAsync(string titulo)
        {
            IQueryable<Atividade> query = _dataContext.Atividades;

            query = query.AsNoTracking()
                        .OrderBy(a => a.Titulo)
                        .Where(a => a.Titulo.Equals(titulo));

            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<Atividade>> GetTodasAsync()
        {
            IQueryable<Atividade> query = _dataContext.Atividades;

            query = query.AsNoTracking().OrderBy(a => a.Id);

            return await query.ToListAsync();
        }

    }
}
