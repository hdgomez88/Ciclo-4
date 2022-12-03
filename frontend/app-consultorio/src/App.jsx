import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CrearCuenta from './paginas/autenticacion/CrearCuenta';
import Login from './paginas/autenticacion/Login';
import AgendaCitasAdmin from './paginas/citas_medicas/AgendaCitasAdmin';
import AgendaCitasCrear from './paginas/citas_medicas/AgendaCitasCrear';
import AgendaCitasEditar from './paginas/citas_medicas/AgendaCitasEditar';
import EspecialidadesAdmin from './paginas/citas_medicas/EspecialidadesAdmin';
import EspecialidadesCrear from './paginas/citas_medicas/EspecialidadesCrear';
import EspecialidadesEditar from './paginas/citas_medicas/EspecialidadesEditar';
import RolesAdmin2 from './paginas/configuracion/RolesAdmin2';
import RolesCrear from './paginas/configuracion/RolesCrear';
import RolesEditar from './paginas/configuracion/RolesEditar';
import UsuariosAdmin from './paginas/configuracion/UsuariosAdmin';
import UsuariosCrear from './paginas/configuracion/UsuariosCrear';
import UsuariosEditar from './paginas/configuracion/UsuariosEditar';
import DashBoard from './paginas/DashBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/dashboard" exact element={<DashBoard/>}/>
          <Route path="/roles-admin2" exact element={<RolesAdmin2/>}/>
          <Route path="/roles-crear" exact element={<RolesCrear/>}/>
          <Route path="/roles-editar/:id" exact element={<RolesEditar/>}/>
          <Route path="/usuarios-admin" exact element={<UsuariosAdmin/>}/>
          <Route path="/usuarios-editar/:id" exact element={<UsuariosEditar/>}/>
          <Route path="/usuarios-crear" exact element={<UsuariosCrear/>}/>
          <Route path="/especialidades-admin" exact element={<EspecialidadesAdmin/>}/>
          <Route path="/especialidades-crear" exact element={<EspecialidadesCrear/>}/>
          <Route path="/especialidades-editar/:id" exact element={<EspecialidadesEditar/>}/>
          <Route path="/agenda-citas-admin" exact element={<AgendaCitasAdmin/>}/>
          <Route path="/agenda-citas-crear" exact element={<AgendaCitasCrear/>}/>
          <Route path="/agenda-citas-editar/:id" exact element={<AgendaCitasEditar/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
