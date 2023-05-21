using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public AtividadeController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _dataContext.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(long id)
        {
            return _dataContext.Atividades.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public Atividade Post([FromBody] Atividade atividade)
        {
            _dataContext.Atividades.Add(atividade);
            _dataContext.SaveChanges();

            return atividade;
        }

        [HttpPut("{id}")]
        public Atividade Put(long id, Atividade atividade)
        {
            if (atividade.Id != id)
                throw new Exception("Atualizando a atividade errada!");

            _dataContext.Atividades.Update(atividade);
            _dataContext.SaveChanges();

            return atividade;
        }

        [HttpDelete("{id}")]
        public string Delete(long id)
        {
            var atividade = _dataContext.Atividades.FirstOrDefault(a => a.Id == id);

            if (atividade != null)
            {
                _dataContext.Atividades.Remove(atividade);
                _dataContext.SaveChanges();
                return "Deletado.";
            }

            return "Não Deletado";
        }
    }
}
