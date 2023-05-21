namespace ProAtividade.API.Models
{
    public class Atividade
    {
        public long Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Prioridade { get; set; }

        public Atividade()
        {
            
        }

        public Atividade(long id)
        {
            this.Id = id;
        }
    }
}
