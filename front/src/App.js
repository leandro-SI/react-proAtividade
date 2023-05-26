import './App.css';
import Atividade from './pages/atividades/Atividade';
import { Route, Switch } from 'react-router-dom/esm/react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Cliente from './pages/clientes/Cliente';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';



export default function App() {

    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/atividade/lista' exact component={Atividade} />
            <Route path='/cliente/lista' exact component={Cliente} />
            {/* <Route path='/cliente/detalhe' exact component={ClienteForm} /> */}
            <Route path='/cliente/detalhe/:id?' exact component={ClienteForm} />
            <Route component={PageNotFound} />
        </Switch>
    );
}

// const Home = () => (
//     <div>
//         <h1>Home</h1>
//         <hr />
//         <Link to='atividade' >Atividades</Link>
//     </div>
// )
