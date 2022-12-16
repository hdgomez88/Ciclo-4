import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensaje from '../../helpers/mensajes.js';
import formatoFecha from '../../helpers/formatoFecha.js';

const ReservarCitasAdmin = () => {

    const [arreglo, setArreglo] = useState([]);

    const obtenerListado = async () => {
        const response = await APIInvoke.invokeGET(`/api/agenda-citas/citas-disponibles`)
        setArreglo(response);
    }

    useEffect(() => {
        obtenerListado();
    }, []);

    const updateEstadoAgendaCita= async (id)=>{
        const body={
            estadoCita: dominios.ESTADO_AGENDA_CITA_NO_DISPONIBLE
        }
        await APIInvoke.invokePUT(`/api/agenda-citas/${id}`, body);
    }

    const reservarCita= async (e, idCita, medico, especialidad)=>{
        console.log(medico);
        e.preventDefault();
        const idUsuario=localStorage.getItem('iduser');

        const body={
            idAgendaCita:idCita,
            idUsuario:idUsuario,
            idMedico:medico,
            idEspecialidad:especialidad

        }

        const response = await APIInvoke.invokePOST(`/api/reserva-citas`, body);

        if (response.ok=== "SI"){
            updateEstadoAgendaCita(idCita);
            mensaje('success', response.msg);
            obtenerListado();
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
                    breadCrumb2={"Listado Citas"}
                    breadCrumb3={""}
                    ruta={"/reserva-citas-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Citas</h5>
                                        
                                        {
                                            arreglo.length === 0 ?
                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    No existen agenda de Citas.
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                                                </div>
                                                :
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Id</th>
                                                                <th style={{ width: '20%', textAlign: "center" }}>Especialidad</th>
                                                                <th style={{ width: '20%', textAlign: "center" }}>Médico</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Fecha</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Hora</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Consultorio</th>
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
                                                                            <td style={{ textAlign: "center" }}>{elemento.idEspecialidad.nombreEspecialidad}</td>
                                                                            <td style={{ textAlign: "center" }}>
                                                                                {elemento.idMedico.nombreUsuario} {elemento.idMedico.apellidosUsuario}</td>
                                                                            <td style={{ textAlign: "center" }}>{formatoFecha(elemento.fechaCita, 2)}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.horaCita}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.numeroConsultorio}</td>
                                                                            <td style={{ textAlign: "center" }}>
                                                                                {elemento.estadoCita === dominios.ESTADO_AGENDA_CITA_DISPONIBLE ? <span className="text-success">DISPONIBLE</span> :
                                                                                    elemento.estadoCita === dominios.ESTADO_AGENDA_CITA_NO_DISPONIBLE ? <span className="text-danger">NO DISPONIBLE</span> :
                                                                                         <span className="text-warning">CANCELADA</span>
                                                                                }

                                                                            </td>
                                                                            <td style={{ textAlign: "center" }}>
                                                                                <button onClick={(e) => reservarCita(e, elemento._id,elemento.idMedico._id,elemento.idEspecialidad._id)} type="button" className="btn btn-primary btn-sm" title='Reservar Cita'>
                                                                                    <i className="bi bi-person-plus-fill"></i></button>
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

export default ReservarCitasAdmin;