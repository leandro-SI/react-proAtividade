import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

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

  return (

    <>

      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
      />

    </>
  );
}

export default App;
