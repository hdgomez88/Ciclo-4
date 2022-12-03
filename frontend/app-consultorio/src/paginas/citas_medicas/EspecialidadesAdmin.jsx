import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensaje from '../../helpers/mensajes.js';
import { Link } from "react-router-dom"

const EspecialidadesAdmin = () => {

    const [arreglo, setArreglo] = useState([]);

    const obtenerListado = async () => {
        const response = await APIInvoke.invokeGET(`/api/especialidades`)
        setArreglo(response);
    }

    useEffect(() => {
        obtenerListado();
    }, []);

    const borrar = async (e, id) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/especialidades/${id}`)

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
                    breadCrumb1={"Citas Médicas"}
                    breadCrumb2={"Listado Especialidades"}
                    breadCrumb3={""}
                    ruta={"/especialidades-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Especialidades</h5>
                                        <div className="col-lg-12 mb-3">
                                            <Link to={"/especialidades-crear"} className="btn btn-primary">Crear</Link>
                                        </div>
                                        {
                                            arreglo.length === 0 ?
                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    No existen especialidades.
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                                                </div>
                                                :
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Id</th>
                                                                <th style={{ width: '70%', textAlign: "center" }}>Especialidad</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Opciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                arreglo.map(
                                                                    elemento =>
                                                                        <tr key={elemento._id}>
                                                                            <td style={{ textAlign: "center" }}>{elemento._id}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.nombreEspecialidad}</td>
                                                                            <td style={{ textAlign: "center" }}>
                                                                                <Link to={`/especialidades-editar/${elemento._id}`} className="btn btn-primary btn-sm" title='Editar'>
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

                                        }


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

export default EspecialidadesAdmin;