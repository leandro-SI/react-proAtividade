import { useState } from 'react';
import './App.css';

let inicialState = [
  {
    id: 1,
    prioridade: '3',
    titulo: 'Estudar React',
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    prioridade: '2',
    titulo: 'Estudar Microserviços',
    descricao: 'Segunda Atividade'
  }
];

function App() {

  const [atividades, setAtividades] = useState(inicialState)

  function addAtividade(e) {
    e.preventDefault();

    var atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
    setAtividades([...atividadesFiltradas]);

  }

  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
        break;
      case '2':
        return 'normal';
        break;
      case '3':
        return 'Alta';
        break;
      default:
        return 'Não Definido';
        break;
    }
  }

  //style={{color: 'yellow'}}

  function prioridadeStyle(param, icone) {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success';
        break;
      case '2':
        return icone ? 'meh' : 'dark';
        break;
      case '3':
        return icone ? 'frown' : 'warning';
        break;
      default:
        return 'Não definido'
        break;
    }
  }

  // function getLastId() {
  //   return atividades.length + 1;
  // }

  return (

    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id"
            value={Math.max.apply(Math, atividades.map(item => item.id)) + 1} disabled placeholder="id" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" placeholder="titulo" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao" placeholder="descricao" />
        </div>

        <hr />

        <div className='col-12'>
          <button className="btn btn-outline-secondary" onClick={addAtividade} >+ Atividade</button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map(ativ => (
          <div key={ativ.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge text-bg-secondary me-1">{ativ.id}</span>
                  - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                    <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade, true)}></i>
                    {prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2' title='Editar o Card'>
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger' title='Deletar o Card'
                  onClick={() => deletarAtividade(ativ.id)}>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
