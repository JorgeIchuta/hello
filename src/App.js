import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/paginas/Inicio';
import Beni from './componentes/paginas/Beni';
import Chuqui from './componentes/paginas/Chuqui';
import Cocha from './componentes/paginas/Cocha';
import Lapaz from './componentes/paginas/Lapaz';
import Oruro from './componentes/paginas/Oruro';
import Pando from './componentes/paginas/Pando';
import Potosi from './componentes/paginas/Potosi';
import Santa from './componentes/paginas/Santa';
import Tarija from './componentes/paginas/Tarija';
import Sobreb from './componentes/paginas/Sobreb';
import Creditos from './componentes/paginas/Creditos';
import Barra from './componentes/Barra';
import Ppagina from './componentes/Ppagina';

const App = () => {
  return(
    <Router>
      <Barra/>
      <Routes>
        <Route path='/' Component={Inicio}/>
        <Route path='/Sobreb' Component={Sobreb}/>
        <Route path='/Beni' Component={Beni}/>
        <Route path='/Chuqui' Component={Chuqui}/>
        <Route path='/Cocha' Component={Cocha}/>
        <Route path='/Lapaz' Component={Lapaz}/>
        <Route path='/Oruro' Component={Oruro}/>
        <Route path='/Pando' Component={Pando}/>
        <Route path='/Potosi' Component={Potosi}/>
        <Route path='/Santa' Component={Santa}/>
        <Route path='/Tarija' Component={Tarija}/>
        <Route path='/Creditos' Component={Creditos}/>
      </Routes>
      <Ppagina />
    </Router>
  );
}

export default App;



