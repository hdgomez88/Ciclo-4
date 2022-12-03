import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensaje from '../../helpers/mensajes.js';
import {useNavigate} from "react-router-dom"
const RolesCrear = () => {

    const navigate= useNavigate();

    const [nuevo, setNuevo]= useState({
        nombre:'',
        estado: dominios.ESTADO_ROL_ACTIVO
    })

    const{nombre}= nuevo;

    const onChange= (e)=>{
        setNuevo({
            ...nuevo,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        document.getElementById('nombre').focus()
    }, []);

    const onSubmit= (e)=>{
        e.preventDefault();
        crearRol()
    }

    const cancelar= (e)=>{
        e.preventDefault();
        vaciarCaja()
    }

    const vaciarCaja= ()=>{
        setNuevo({
            nombre:'',
            estado: dominios.ESTADO_ROL_ACTIVO
        });
        document.getElementById('nombre').focus()
    }

    

    const crearRol= async ()=>{
        const body={
        nombreRol:nuevo.nombre,
        estadoRol:nuevo.estado
        }
        const response= await APIInvoke.invokePOST(`/api/roles`, body)

        if (response.ok==="SI"){
            mensaje('success', response.msg);
            navigate("/roles-admin2")
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
                    breadCrumb1={"configuración"}
                    breadCrumb2={"Listado Roles"}
                    breadCrumb3={"Crear Roles"}
                    ruta={"/roles-admin2"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Crear Roles</h5>
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
                                                            onChange={onChange}
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

export default RolesCrear;