using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Services;
using ProAtividade.Domain.Services;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        private readonly IAtividadeService _atividadeService;

        public AtividadeController(IAtividadeService atividadeService)
        {
            _atividadeService = atividadeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var atividades = await _atividadeService.PegarTodasAtividadesAsync();

                if (atividades == null) return NoContent();

                return Ok(atividades);
            }
            catch (Exception _error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar as atividades. Erro: {_error.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id)
        {
            try
            {
                var atividade = await _atividadeService.PegarAtividadePorIdAsync(id);

                if (atividade == null) return NoContent();

                return Ok(atividade);
            }
            catch (Exception _error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, 
                    $"Erro ao tentar recuperar a atividade. Erro: {_error.Message}");    
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Atividade atividade)
        {
            try
            {
                var atividadeResponse = await _atividadeService.AdicionarAtividade(atividade);

                if (atividadeResponse == null) return BadRequest();

                return Ok(atividadeResponse);
            } 
            catch (Exception _error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar salvar a atividade. Erro: {_error.Message}");
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Atividade model)
        {
            try
            {
                if (model.Id != id)
                {
                    return this.StatusCode(StatusCodes.Status409Conflict,
                        $"Você está tentando atualizar a atividade errada.");
                } 
                    
                var atividadeResponse = await _atividadeService.AtualizarAtividade(model);

                if (atividadeResponse == null) return BadRequest("Ocorreu um erro ao atualizar a atividade.");

                return Ok(atividadeResponse);
            }
            catch (Exception _error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar salvar a atividade. Erro: {_error.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                var response = await _atividadeService.DeletarAtividade(id);

                if (!response) return BadRequest("Ocorreu um problema não específico ao tentar deletar a atividade.");

                return Ok(new { message = "Deletado" });
            }
            catch (Exception _error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar salvar a atividade. Erro: {_error.Message}");
            }
        }
    }
}
