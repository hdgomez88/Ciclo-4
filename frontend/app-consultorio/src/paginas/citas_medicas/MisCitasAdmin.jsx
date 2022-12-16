import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../componentes/BreadCrumb';
import Header from '../../componentes/Header';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../helpers/APIInvoke.js';
import dominios from '../../helpers/dominios.js';
import mensaje from '../../helpers/mensajes.js';


const MisCitasAdmin = () => {

    const idUsuario=localStorage.getItem('iduser');

    const [arreglo, setArreglo] = useState([]);

    const obtenerListado = async () => {
        const response = await APIInvoke.invokeGET(`/api/reserva-citas/citas/${idUsuario}`);
        setArreglo(response);
    }

    useEffect(() => {
        obtenerListado();
    }, []);

    const updateEstadoAgendaCita= async (id)=>{
        const body={
            estadoCita: dominios.ESTADO_AGENDA_CITA_CANCELADA
        }
        await APIInvoke.invokePUT(`/api/agenda-citas/${id}`, body);
    }

    const CancelarCita= async (e, id)=>{
        e.preventDefault();

        const response = await APIInvoke.invokeDELETE(`/api/reserva-citas/${id}`);

        if (response.ok=== "SI"){
            mensaje('success', response.msg);
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
                    breadCrumb3={"Mis Citas"}
                    ruta={"/reserva-citas-admin"}
                />
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mis Citas</h5>
                                        
                                        {
                                            arreglo.length === 0 ?
                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    No tiene Citas reservadas.
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                                                </div>
                                                :
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Fecha</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Hora</th>
                                                                <th style={{ width: '20%', textAlign: "center" }}>Especialidad</th>
                                                                <th style={{ width: '30%', textAlign: "center" }}>Medico</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Consultorio</th>
                                                                <th style={{ width: '10%', textAlign: "center" }}>Opciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                arreglo.map(
                                                                    elemento =>
                                                                        <tr key={elemento._id}>
                                                                            <td style={{ textAlign: "center" }}>{elemento.idAgendaCita.fechaCita}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.idAgendaCita.horaCita}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.idEspecialidad.nombreEspecialidad}</td>
                                                                            <td style={{ textAlign: "center" }}>
                                                                                {elemento.idMedico.nombreUsuario} {elemento.idMedico.apellidosUsuario}</td>
                                                                            <td style={{ textAlign: "center" }}>{elemento.idAgendaCita.numeroConsultorio}</td>                                                                           
                                                                            <td style={{ textAlign: "center" }}>
                                                                                <button onClick={(e) => CancelarCita(e, elemento._id)} type="button" className="btn btn-danger btn-sm" title='Cancelar Cita'>
                                                                                    <i className="bi bi-x-circle"></i></button>
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

export default MisCitasAdmin;