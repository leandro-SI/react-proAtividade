using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;
using System;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
            return "Meu primeiro método get";
        }

        [HttpGet("{id}")]
        public string Get(long id)
        {
            return $"Meu primeiro método get com parâmetro: {id}";
        }

        [HttpPost]
        public Atividade Post([FromBody] Atividade atividade)
        {
            return atividade;
        }

        [HttpPut("{id}")]
        public string Put(long id)
        {
            return $"Meu primeiro método put com parâmetro: {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(long id)
        {
            return $"Meu primeiro método delete com parâmetro: {id}";
        }
    }
}
