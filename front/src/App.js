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

  const [atividades, setAtividades] = useState(inicialState);
  const [atividade, setAtividade] = useState({});

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

  function pegarAtividade(id) {
    const atividade = atividades.filter(a => a.id == id)
    setAtividades(atividade[0]);
  }

  return (

    <>

      <AtividadeForm
        addAtividade={addAtividade}
        atividadeSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />

    </>
  );
}

export default App;
