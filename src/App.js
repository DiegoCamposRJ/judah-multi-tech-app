import React from 'react';
import Navbar from './componentes/Navbar';

import './App.css';
import Inicio from './componentes/pages/Inicio';
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
          <Route path='*'               component={Pagina404} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
