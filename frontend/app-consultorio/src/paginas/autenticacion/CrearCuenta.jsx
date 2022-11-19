import React from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {

    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt />
                                            <span className="d-none d-lg-block">NiceAdmin</span>
                                        </a>
                                    </div>{/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Crear Cuenta</h5>
                                                <p className="text-center small">Ingrese sus datos</p>
                                            </div>
                                            <form className="row g-3 needs-validation">

                                                <div className="col-12">
                                                    <label htmlFor="nombres" className="form-label">Nombre(s)</label>
                                                    <input type="text"
                                                        name="nombres"
                                                        className="form-control"
                                                        id="nombres"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Ingrese su(s) nombre(s)</div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                                    <input type="text"
                                                        name="apellidos"
                                                        className="form-control"
                                                        id="apellidos"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Ingrese sus apellidos</div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="celular" className="form-label">Celular</label>
                                                    <input type="number"
                                                        name="celular"
                                                        className="form-control"
                                                        id="celular"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Ingrese su numero de celular</div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="correo" className="form-label">Correo Electronico</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            name="correo"
                                                            className="form-control"
                                                            id="correo"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">Por favor, ingrese su correo</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                                    <input type="text"
                                                        name="direccion"
                                                        className="form-control"
                                                        id="direccion"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Ingrese su dirección</div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="usuario" className="form-label">Usuario Acceso</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            name="usuario"
                                                            className="form-control"
                                                            id="usuario"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="clave" className="form-label">Contraseña</label>
                                                    <input type="password"
                                                        name="clave"
                                                        className="form-control"
                                                        id="clave"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                            
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Crear Cuenta</button>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <p className="small mb-0"><Link to={"/"}>Regresar</Link> </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default CrearCuenta;