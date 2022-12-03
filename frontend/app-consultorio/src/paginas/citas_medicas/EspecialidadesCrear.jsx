import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensaje from '../../helpers/mensajes.js';
import {useNavigate} from "react-router-dom"

const EspecialidadesCrear = () => {

    const navigate= useNavigate();

    const [nombre, setNombre]= useState('');


    useEffect(() => {
        document.getElementById('nombre').focus()
    }, []);

    const onSubmit= (e)=>{
        e.preventDefault();
        crearEspecialidad()
    }

    const cancelar= (e)=>{
        e.preventDefault();
        mensaje('success', 'Creacion cancelada')
        navigate("/especialidades-admin")
    }

    /*const vaciarCaja= ()=>{
        nombre({
            nombre:''
        });
        document.getElementById('nombre').focus()
    }*/

    

    const crearEspecialidad= async ()=>{
        const body={
        nombreEspecialidad:nombre
        }
        const response= await APIInvoke.invokePOST(`/api/especialidades`, body)

        if (response.ok==="SI"){
            mensaje('success', response.msg);
            navigate("/especialidades-admin")
        }else{
            mensaje('error', response.msg)
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
                    breadCrumb3={"Crear especialidades"}
                    ruta={"/especialidades-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Crear Especialidades</h5>
                                        <form onSubmit={onSubmit}>
                                            <div className="col-lg-8 mb-3">
                                                <div className="row mb-3">
                                                    <label htmlFor="inputText" className="col-sm-2 col-form-label">Nombre</label>
                                                    <div className="col-sm-10">
                                                        <input type="text"
                                                            className="form-control"
                                                            id='nombre'
                                                            name='nombre'
                                                            value={nombre}
                                                            onChange={e=>setNombre(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='row'>
                                            <div className="col-lg-6 text-start">
                                                <button type="submit" className="btn btn-success">
                                                    Guardar
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

export default EspecialidadesCrear;