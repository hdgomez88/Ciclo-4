import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link collapsed" to={"/dashboard"}>
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#configuracion-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-gear-fill" /><span>Configuracion</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="configuracion-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"/roles-admin2"}>
                                <i className="bi bi-circle" /><span>Roles</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/usuarios-admin"}>
                                <i className="bi bi-circle" /><span>Usuarios</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#citas-medicas-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-calendar-event-fill" /><span>Citas Medicas</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="citas-medicas-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"/especialidades-admin"}>
                                <i className="bi bi-circle" /><span>Especialidades</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/agenda-citas-admin"}>
                                <i className="bi bi-circle" /><span>Agenda Citas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <i className="bi bi-circle" /><span>Reservar Citas</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#historia-clinica-nav" data-bs-toggle="collapse" to={"#"}>
                        <i className="bi bi-clipboard-plus" /><span>Historia Clinica</span><i className="bi bi-chevron-down ms-auto" />
                    </Link>
                    <ul id="historia-clinica-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Especialidades</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Agenda Citas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <i className="bi bi-circle" /><span>Reservar Citas</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Menu;