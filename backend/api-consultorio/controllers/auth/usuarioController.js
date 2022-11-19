import Usuario from "../../models/auth/Usuario.js";
import generarJWT from "../../helpers/generarJWT.js";

const agregar= async(req, res) => {
    //EVITAR usuarios DUPLICADOS PPOR EL NOMBRE
    const {usuarioAcceso}=req.body;
    
    //validar si existe otro usuario igual
    const existeUsuario= await Usuario.findOne({usuarioAcceso});

    if (existeUsuario) {
        const error = new Error("Usuario ya esta registrado en la base de datos")
        return res.status(400).json({msg:error.message, ok: "NO"});
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado=await usuario.save();
        res.json({body: usuarioGuardado, ok: "SI",msg: "Documento creado correctamente."});
    } catch (error) {
        console.log(error);
    }
}

const listar= async(req, res) => {
    const usuarios= await Usuario.find().populate('idRol',{
        nombreRol: 1,
        _id:0
    });
    res.json(usuarios);
}

const eliminar= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe el usuario
    const usuario = await Usuario.findById(id);

    if(!usuario){
        const error=new Error("usuario no encontrado.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }

    try {
        await usuario.deleteOne();
        res.json({msg: "usuario eliminado correctamente.", ok: "SI"});
    } catch (error) {
        console.log(error);
        
    }
}

const editar= async(req, res) => {
   //recibir los parametros por la url
   const {id}= req.params;
    
   //validar si existe el id a eliminar
   const usuario = await Usuario.findById(id);

   if(!usuario){
       const error=new Error("Documento no encontrado.");
       return res.status(404).json({msg: error.message, ok: "NO"});
   }

   //RECIBIR LOS DATOS ENVIADOS DESDE EL FORMULARIO
   usuario.idRol= req.body.idRol || usuario.idRol;
   usuario.nombreUsuario= req.body.nombreUsuario || usuario.nombreUsuario;
   usuario.apellidoUsuario= req.body.apellidoUsuario || usuario.apellidoUsuario;
   usuario.celularUsuario= req.body.celularUsuario || usuario.celularUsuario;
   usuario.correoUsuario= req.body.correoUsuario || usuario.correoUsuario;
   usuario.direccionUsuario= req.body.direccionUsuario || usuario.direccionUsuario;
   usuario.usuarioAcceso= req.body.usuarioAcceso || usuario.usuarioAcceso;
   usuario.claveAcceso= req.body.claveAcceso || usuario.claveAcceso;
   usuario.estadoUsuario= req.body.estadoUsuario || usuario.estadoUsuario;
   

   try {
      const usuarioGuardado= await usuario.save();
      res.json({body: usuarioGuardado, msg: "Documento actualizado correctamente", ok: "SI"});
   } catch (error) {
      console.log(error);
      
   }
}

const listarUno= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe el id a eliminar
    const usuario = await Usuario.findById(id);

    if(!usuario){
        const error=new Error("Documento no encontrado.");
        return res.status(404).json({msg: error.message, ok: "NO"});
}
    res.json({usuario});
}

const autenticar= async(req, res) =>{
  const {usuarioAcceso, claveAcceso} = req.body;

    //comprobar el usuario
    const usuario= await Usuario.findOne({usuarioAcceso})

    if(!usuario){
        const error = new Error("Usuario no existente.")
        return res.status(404).json({msg: error.message, ok:"NO_EXISTE"})
    }

    //comprobar si la constraseña es correcta
    if (await usuario.comprobarClave(claveAcceso)){
        res.json({
            _id:usuario._id,
            nombreUsuario:usuario.nombreUsuario,
            usuarioAcceso:usuario.usuarioAcceso,
            tokenJWT: generarJWT(usuario._id)
        });
    }else{
        const error=new Error("Clave incorrecta.")
        res.json({msg: error.message, ok:"CLAVE_INCORRECTA"});
    }
}

const crearCuenta= async(req, res) => {

}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
    autenticar,
    crearCuenta
}