import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

const rootElement = (
  <Router>
    <Menu />
    <div className='container'>
      <App />
    </div>
  </Router>
);

if (root && root.hasChildNodes()) {
  ReactDOM.hydrate(rootElement, root);
} else {
  ReactDOM.render(rootElement, root);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Menu />
//     <div className='container'>
//       <App />
//     </div>
//   </Router>
// );
