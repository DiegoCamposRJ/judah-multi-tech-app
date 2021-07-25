import React from 'react';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import './App.css';
import Inicio from './componentes/pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicos from './componentes/pages/Servicos';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' exact component={Servicos} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
