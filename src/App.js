
import './style/App.css';
import { Route, Routes } from 'react-router-dom';

import Nav from './Componentes/Nav'
import Skills from './Componentes/Skills';
import Formulario from './Componentes/Formulario';
import Pie from './Componentes/Pie';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/skills' element={<Skills />} />
          <Route path='/formulario' element={<Formulario />} />
        </Route>
      </Routes>
      <Skills></Skills>
      <Formulario></Formulario>
      <Pie informacion='Todos los Derechos reservados a M&M / 2022'></Pie>
    </div>
  );
}

export default App;
