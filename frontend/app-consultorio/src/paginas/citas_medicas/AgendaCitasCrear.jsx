import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensaje from '../../helpers/mensajes.js';
import { useNavigate } from "react-router-dom"
import dominios from '../../helpers/dominios';
import Form from 'react-bootstrap/Form';

const AgendaCitasCrear = () => {

    const navigate = useNavigate();

    const [medico, setMedico] = useState('-8');
    const [fecha, setFecha] = useState('');
    const [arregloMedicos, setArregloMedicos] = useState([]);
    const [especialidad, setEspecialidad] = useState('-8');
    const [arregloEspecialidades, setArregloEspecialidades] = useState([]);
    const [hora, setHora] = useState('');
    const [numeroConsultorio, setNumeroConsultorio] = useState('');
    const [estado, setEstado] = useState(dominios.ESTADO_AGENDA_CITA_DISPONIBLE);

    const comboMedicos = async () => {
        const response = await APIInvoke.invokeGET(`/api/usuarios/combo-medicos`)
        setArregloMedicos(response);
    }


    const comboEspecialidades = async () => {
        const response = await APIInvoke.invokeGET(`/api/especialidades`)
        setArregloEspecialidades(response);
    }


    useEffect(() => {
        comboEspecialidades();
        comboMedicos();
        document.getElementById('medico').focus()
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        if (medico === "-8") {
            mensaje('error', 'Debe seleccionar un Médico.');
        } else if (especialidad === "-8") {
            mensaje('error', 'Debe seleccionar una Especialidad.');
        } else {
            crear()
        } 


    }

    const cancelar = (e) => {
        e.preventDefault();
        mensaje('success', 'Creacion cancelada')
        navigate("/agenda-citas-admin")
    }

    /*const vaciarCaja= ()=>{
        nombre({
            nombre:''
        });
        document.getElementById('nombre').focus()
    }*/



    const crear = async () => {
        const body = {
            idMedico: medico,
            idEspecialidad: especialidad,
            fechaCita: fecha,
            horaCita: hora,
            numeroConsultorio: numeroConsultorio,
            estadoCita: estado
        }
        const response = await APIInvoke.invokePOST(`/api/agenda-citas`, body)

        if (response.ok === "SI") {
            mensaje('success', response.msg);
            navigate("/agenda-citas-admin")
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
                    breadCrumb1={"Citas Médicas"}
                    breadCrumb2={"Listado Agenda de Citas"}
                    breadCrumb3={"Crear Agenda de Citas"}
                    ruta={"/agenda-citas-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Crear Agenda de Citas</h5>
                                        <form onSubmit={onSubmit}>
                                            <div className="col-lg-8 mb-3">
                                                <div className="row mb-3">
                                                    <label htmlFor="medico" className="col-sm-2 col-form-label">Seleccione un Médico</label>
                                                    <Form.Select aria-label="Default select example"
                                                        style={{ cursor: 'pointer' }}
                                                        id="medico"
                                                        name="medico"
                                                        value={medico}
                                                        onChange={e => setMedico(e.target.value)}
                                                    >
                                                        <option value="-8">SELECCIONE</option>
                                                        {
                                                            arregloMedicos.map(
                                                                opcion =>
                                                                    <option key={opcion._id} value={opcion._id}>{opcion.nombreUsuario} {opcion.apellidosUsuario}</option>
                                                            )
                                                        }
                                                    </Form.Select>

                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="especialidad" className="col-sm-2 col-form-label">Seleccione una Especialidad</label>
                                                    <Form.Select aria-label="Default select example"
                                                        style={{ cursor: 'pointer' }}
                                                        id="especialidad"
                                                        name="especialidad"
                                                        value={especialidad}
                                                        onChange={e => setEspecialidad(e.target.value)}
                                                    >
                                                        <option value="-8">SELECCIONE</option>
                                                        {
                                                            arregloEspecialidades.map(
                                                                opcion =>
                                                                    <option key={opcion._id} value={opcion._id}>{opcion.nombreEspecialidad}</option>
                                                            )
                                                        }
                                                    </Form.Select>

                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="fecha" className="col-sm-2 col-form-label">Fecha</label>
                                                    <div className="col-sm-10">
                                                        <input type="date"
                                                            style={{cursor: 'pointer'}}
                                                            className="form-control"
                                                            id='fecha'
                                                            name='fecha'
                                                            value={fecha}
                                                            onChange={e => setFecha(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="hora" className="col-sm-2 col-form-label">Hora</label>
                                                    <div className="col-sm-10">
                                                        <input type="time"
                                                            className="form-control"
                                                            id='hora'
                                                            name='hora'
                                                            value={hora}
                                                            onChange={e => setHora(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="numeroConsultorio" className="col-sm-2 col-form-label">Numero de Consultorio</label>
                                                    <div className="col-sm-10">
                                                        <input type="number"
                                                            className="form-control"
                                                            id='numeroConsultorio'
                                                            name='numeroConsultorio'
                                                            value={numeroConsultorio}
                                                            onChange={e => setNumeroConsultorio(e.target.value)}
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
export default AgendaCitasCrear;