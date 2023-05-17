import './App.css';

function App() {

  const atividades = [
    {
      id: 1,
      descricao: 'Primeira Atividade'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>{atividades[0].id} {atividades[0].descricao}</li>
          <li onClick={() => alert("JSX")} >Segunda Atividade</li>
          <li>Terceira Atividade</li>
          <li>Quarta Atividade</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
