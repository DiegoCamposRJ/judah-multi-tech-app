/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Navbar from './componentes/Navbar';

import './App.css';
import Inicio from './componentes/pages/Inicio';
//re escrever com BrowserRouter para usar HashRouter de react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicos from './componentes/pages/Servicos';
import Projetos from './componentes/pages/Projetos';
import Pagina404 from './componentes/pages/Pagina404';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' exact component={Servicos} />
          <Route path='/projetos' exact component={Projetos} />
           / / pag erro 404 para demais rotos
          <Route path='*'               component={Pagina404} />
          <Route path='/erro404' exact component={Pagina404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
