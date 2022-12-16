import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import dominios from '../helpers/dominios';
import MenuAdmin from './MenuAdmin';
import MenuPacientes from './MenuPacientes';
import MenuMedicos from './MenuMedicos';

const Menu = () => {
    const [rolUsuario,setRolUsuario]= useState(localStorage.getItem('rol'));
    
    return (
        <>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link collapsed" to={"/dashboard"}>
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {
                    rolUsuario===dominios.ID_ROL_ADMIN?
                    <MenuAdmin></MenuAdmin>
                    :
                    rolUsuario===dominios.ID_ROL_PACIENTE?
                    <MenuPacientes></MenuPacientes>
                    :
                    <MenuMedicos></MenuMedicos>

                }
            </ul>
        </>
    );
}

export default Menu;