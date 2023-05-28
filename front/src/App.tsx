import './App.css';
import Atividade from './pages/atividades/Atividade';
import { Route } from 'react-router-dom/';
import Dashboard from './pages/dashboard/Dashboard';
import Cliente from './pages/clientes/Cliente';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';
import { Routes } from 'react-router-dom';


const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/atividade/*' element={<Atividade />} />
            <Route path='/atividade/:id/cliente' element={<Atividade />} />
            <Route path='/cliente/*' element={<Cliente />} />
            <Route path='/cliente/:id/atividade' element={<Cliente />} />
            <Route path='/cliente/detalhe/' element={<ClienteForm />} />
            <Route path='/cliente/detalhe/:id' element={<ClienteForm />} />
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App;

// const Home = () => (
//     <div>
//         <h1>Home</h1>
//         <hr />
//         <Link to='atividade' >Atividades</Link>
//     </div>
// )
