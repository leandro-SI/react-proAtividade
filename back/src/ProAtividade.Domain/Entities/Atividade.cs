using System;

namespace ProAtividade.Domain.Entities
{
    public class Atividade
    {
        public long Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime? DataConclusao { get; set; }
        public PrioridadeEnum Prioridade { get; set; }

        public Atividade()
        {
            DataCriacao = DateTime.Now;
            DataConclusao = null;
        }

        public Atividade(long id, string titulo, string descricao) : this()
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Descricao = descricao;
        }

        public void Concluir()
        {
            if (DataConclusao == null)
            {
                this.DataConclusao = DateTime.Now;
            }
            else
            {
                throw new Exception($"Atividade já Concluída em: {DataConclusao?.ToString("dd/MM/yyyy hh:mm")}");
            }
        }
    }
}
