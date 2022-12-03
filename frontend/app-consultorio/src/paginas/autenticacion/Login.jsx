import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensaje from '../../helpers/mensajes.js';
import Logo from '../../assets/img/logo.png'

const Login = () => {

    //para redirecionar a otro componente
    const navigate= useNavigate();

    const[login, setLogin]=useState({
      usuario:'',
      clave:''
    })

    const {usuario, clave}= login;

    const onChange=(e)=>{
      setLogin({
          ...login,
          [e.target.name]: e.target.value
      });
    }

    useEffect(() => {
      document.getElementById('usuario').focus();
  },[]);

  const onSubmit=(e) => {
    e.preventDefault();
    iniciarSesion();
}

const iniciarSesion= async()=>{
    const body={
      usuarioAcceso:login.usuario,
      claveAcceso: login.clave
    }
    
    const response= await APIInvoke.invokePOST(`/api/usuarios/login`,body);

    if (response.ok==="NO_EXISTE"){
      mensaje('error', response.msg)
    }else if(response.ok==="CLAVE_INCORRECTA"){
      mensaje('error', response.msg)
    }else{
      //borrar datos del localstorage
      localStorage.removeItem('token')
      localStorage.removeItem('iduser')
      localStorage.removeItem('username')
      localStorage.removeItem('rol')

      //se obtiene el token
      const token= response.tokenJWT;

      //ontener id y nombre de usuario
      const idUsuario= response._id;
      const nombreUsuario=response.nombreUsuario
      const idRol= response.rol

      //guardar datos en el locarstorage
      localStorage.setItem('token', token)
      localStorage.setItem('iduser', idUsuario)
      localStorage.setItem('username', nombreUsuario)
      localStorage.setItem('rol', idRol)

      //redireccionamos al componente menu principal
      navigate("/dashboard")
    }
}


    return (
        <>  
<main>
  <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <Link href="index.html" className="logo d-flex align-items-center w-auto">
                <img src={Logo} alt="Logo" />
                <span className="d-none d-lg-block">Medical Office</span>
              </Link>
            </div>{/* End Logo */}
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Iniciar Sesión</h5>
                  <p className="text-center small">Bienvenido. Ingrese su usuario y contraseña</p>
                </div>
                <form className="row g-3 needs-validation" onSubmit={onSubmit}>
                  <div className="col-12">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" 
                      name="usuario" 
                      className="form-control" 
                      id="usuario"
                      value={usuario} 
                      onChange={onChange}
                      required 
                      />
                      <div className="invalid-feedback">Por favor, ingrese su usuario.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="clave" className="form-label">Contraseña</label>
                    <input type="password" 
                    name="clave" 
                    className="form-control" 
                    id="clave"
                    value={clave} 
                    onChange={onChange}
                    required 
                    />
                    <div className="invalid-feedback">Por favor, ingrese su contraseña!</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Ingresar</button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">No estas registrado? <Link to={"/crear-cuenta"}>Crear una cuenta</Link> </p>
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

export default Login;