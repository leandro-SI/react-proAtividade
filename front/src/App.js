import { useState } from 'react';
import './App.css';

let inicialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    descricao: 'Segunda Atividade'
  }
];

function App() {

  const [atividades, setAtividades] = useState(inicialState)

  function addAtividade(e) {
    e.preventDefault();

    var atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  return (

    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">Id</label>
          <input type="text" className="form-control" id="id" placeholder="id" />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao" placeholder="descricao" />
        </div>

        <hr />

        <div className='col-12'>
          <button className="btn btn-outline-secondary" onClick={addAtividade} >+ Atividade</button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map(ativ => (
          <div key={ativ.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className="badge text-bg-secondary me-1">{ativ.id}</span>
                  - titulo
                </h5>
                <h6>
                  Prioridade:
                  <span className='ms-1 text-black'>
                    <i className='me-1 far fa-smile' ></i>
                     Normal
                  </span>
                </h6>
              </div>
              <p className="card-text">
                {ativ.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
