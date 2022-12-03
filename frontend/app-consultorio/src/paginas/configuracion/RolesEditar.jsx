import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensaje from '../../helpers/mensajes.js';
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const RolesEditar = () => {

    //capturar parametros por la url
    const { id }= useParams();

    const navigate = useNavigate();

    const [editar, setEditar] = useState({
        nombre: '',
        estado: ''
    });

    useEffect(() => {
        obtenerDocumento();
        document.getElementById('nombre').focus();
    },[]);

    const obtenerDocumento= async ()=>{
        const response= await APIInvoke.invokeGET(`/api/roles/${id}`);
        setEditar({
            nombre: response.nombreRol,
            estado: response.estadoRol 
        });
    }

    const { nombre, estado } = editar;

    const onChange = (e) => {
        setEditar({
            ...editar,
            [e.target.name]: e.target.value
        })
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
        navigate("/roles-admin2")
    }



    const actualizar = async () => {
        const body = {
            nombreRol: editar.nombre,
            estadoRol: editar.estado
        }
        const response = await APIInvoke.invokePUT(`/api/roles/${id}`, body)

        if (response.ok === "SI") {
            mensaje('success', response.msg);
            navigate("/roles-admin2")
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
                    breadCrumb1={"configuración"}
                    breadCrumb2={"Listado Roles"}
                    breadCrumb3={"Editar Rol"}
                    ruta={"/roles-admin2"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Editar Rol</h5>

                                        <form onSubmit={onSubmit}>
                                            <div className="col-lg-8 mb-3">
                                                <div className="row mb-3">
                                                    <label htmlFor="nombre" className="col-sm-6 col-form-label">Nombre</label>
                                                    <div className="col-sm-10">
                                                        <input type="text"
                                                            className="form-control"
                                                            id="nombre"
                                                            name="nombre"
                                                            value={nombre}
                                                            onChange={onChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="estado" className="col-sm-6 col-form-label">Seleccione el Estado</label>
                                                    <div className="col-sm-10">
                                                        <Form.Select aria-label="Default select example"
                                                            style={{cursor:'pointer'}}
                                                            id="estado"
                                                            name="estado"
                                                            value={estado}
                                                            onChange={onChange}
                                                        >
                                                            <option value="1">ACTIVO</option>
                                                            <option value="2">INACTIVO</option>
                                                        </Form.Select>

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

export default RolesEditar;