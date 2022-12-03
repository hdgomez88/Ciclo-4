import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensaje from '../../helpers/mensajes.js';
import { Link } from "react-router-dom"

const UsuariosAdmin = () => {

    const [arreglo, setArreglo] = useState([]);

    const obtenerListado = async () => {
        const response = await APIInvoke.invokeGET(`/api/usuarios`)
        setArreglo(response);
    }

    useEffect(() => {
        obtenerListado();
    }, []);

    const borrar = async (e, id) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/usuarios/${id}`)

        if (response.ok === "SI") {
            mensaje('success', response.msg);
            obtenerListado();
        } else {
            mensaje('error', response.msg);
        }
    }


    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main id="main" className="main">
                <BreadCrumb
                    breadCrumb1={"configuración"}
                    breadCrumb2={"Listado Usuarios"}
                    breadCrumb3={""}
                    ruta={"/usuarios-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Usuarios</h5>
                                        <div className="col-lg-12 mb-3">
                                            <Link to={"/usuarios-crear"} className="btn btn-primary">Crear</Link>
                                        </div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '10%', textAlign: "center" }}>Id</th>
                                                    <th style={{ width: '12%', textAlign: "center" }}>Rol</th>
                                                    <th style={{ width: '34%', textAlign: "center" }}>Nombres</th>
                                                    <th style={{ width: '10%', textAlign: "center" }}>Celular</th>
                                                    <th style={{ width: '14%', textAlign: "center" }}>Usuario</th>
                                                    <th style={{ width: '10%', textAlign: "center" }}>Estado</th>
                                                    <th style={{ width: '10%', textAlign: "center" }}>Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    arreglo.map(
                                                        elemento =>
                                                            <tr key={elemento._id}>
                                                                <td style={{ textAlign: "center" }}>{elemento._id}</td>
                                                                <td style={{ textAlign: "center" }}>{elemento.idRol.nombreRol}</td>
                                                                <td style={{ textAlign: "center" }}>{elemento.nombreUsuario} {elemento.apellidosUsuario}</td>
                                                                <td style={{ textAlign: "center" }}>{elemento.celularUsuario}</td>
                                                                <td style={{ textAlign: "center" }}>{elemento.usuarioAcceso}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    {elemento.estadoUsuario === dominios.ESTADO_USUARIO_ACTIVO ? <span className='text-success'>ACTIVO</span> : <span className='text-danger'>INACTIVO</span>}
                                                                </td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <Link to={`/usuarios-editar/${elemento._id}`} className="btn btn-primary btn-sm" title='Editar'>
                                                                        <i className="bi bi-pencil-square"></i>
                                                                    </Link>
                                                                    &nbsp;
                                                                    <button onClick={(e) => borrar(e, elemento._id)} type="button" className="btn btn-danger btn-sm" title='Borrar'>
                                                                        <i className="bi bi-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>

                                    </div>
                                </div>



                            </div>
                        </div>{/* End Left side columns */}
                    </div>
                </section>

            </main>
        </>
    );
}

export default UsuariosAdmin;