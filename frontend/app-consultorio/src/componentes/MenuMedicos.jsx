import React from 'react'
import { Link } from 'react-router-dom';

const MenuMedicos = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#historia-clinica-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bi bi-clipboard-plus" /><span>Historia Clinica</span><i className="bi bi-chevron-down ms-auto" />
                </Link>
                <ul id="historia-clinica-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Historia Clinica</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Medicamentos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Formula Médica</span>
                        </Link>
                    </li>
                </ul>
            </li>

        </>
    );
}

export default MenuMedicos;