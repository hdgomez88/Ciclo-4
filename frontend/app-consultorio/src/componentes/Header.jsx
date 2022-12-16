import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/img/logo.png"
import Perfil from "../assets/img/profile-img.jpg"
import mensaje from '../helpers/mensajes.js';
const Header = () => {

    const navigate= useNavigate();

    const cerrarSesion = () => {
        //eliminar el localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('iduser')
        localStorage.removeItem('username')
        localStorage.removeItem('rol')

        mensaje('success', 'Sesion finalizada correctamente.')

        //redireccionar al login
        navigate("/");
    }


    const ocultarMenu = () => {
        document.body.classList.toggle("toggle-sidebar")
    }


    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to={"#"} className="logo d-flex align-items-center">
                        <img src={Logo} alt="Logo" />
                        <span className="d-none d-lg-block">Medical Office</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={ocultarMenu} />
                </div>{/* End Logo */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">


                        <li className="nav-item dropdown pe-3">
                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to={"#"} data-bs-toggle="dropdown">
                                <img src={Perfil} alt="Perfil" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem("username")}</span>
                            </Link>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{localStorage.getItem("username")}</h6>
                                    <span className='text-success'>Conectado</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                        <i className="bi bi-person" />
                                        <span>Mi Perfil</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <div className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-box-arrow-right" />
                                        <span onClick={cerrarSesion} style={{cursor:'pointer'}}>Salir</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );
}

export default Header;