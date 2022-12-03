import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensaje from '../../helpers/mensajes.js';
import { useNavigate, useParams } from "react-router-dom";

const EspecialidadesEditar = () => {

    //capturar parametros por la url
    const { id }= useParams();

    const navigate = useNavigate();

    const [editar, setEditar] = useState('')


    useEffect(() => {
        obtenerDocumento();
        document.getElementById('nombre').focus();
    },[]);

    const obtenerDocumento= async ()=>{
        const response= await APIInvoke.invokeGET(`/api/especialidades/${id}`);
        setEditar(response.nombreEspecialidad)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        actualizar();
    }

    const cancelar = (e) => {
        e.preventDefault();
        cancel()
    }

    const cancel = () => {
        mensaje('success', 'Edicion cancelada')
        navigate("/especialidades-admin")
    }



    const actualizar = async () => {
        const body = {
            nombreEspecialidad:editar
        }
        const response = await APIInvoke.invokePUT(`/api/especialidades/${id}`, body)

        if (response.ok === "SI") {
            mensaje('success', response.msg);
            navigate("/especialidades-admin")
        } else {
            mensaje('error', response.msg)
        }
    }



    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main id="main" className="main">
                <BreadCrumb
                    breadCrumb1={"Citas Médicas "}
                    breadCrumb2={"Listado Especialidades"}
                    breadCrumb3={"Editar Especialidad"}
                    ruta={"/especialidades-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Editar Especialidad</h5>

                                        <form onSubmit={onSubmit}>
                                            <div className="col-lg-8 mb-3">
                                                <div className="row mb-3">
                                                    <label htmlFor="nombre" className="col-sm-6 col-form-label">Nombre</label>
                                                    <div className="col-sm-10">
                                                        <input type="text"
                                                            className="form-control"
                                                            id="nombre"
                                                            name="nombre"
                                                            value={editar}
                                                            onChange={e=> setEditar(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='row'>
                                                <div className="col-lg-6 text-start">
                                                    <button type="submit" className="btn btn-success">
                                                        Editar
                                                    </button>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <button onClick={cancelar} type="reset" className="btn btn-primary">Cancelar</button>
                                                </div>
                                            </div>

                                        </form>

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

export default EspecialidadesEditar;