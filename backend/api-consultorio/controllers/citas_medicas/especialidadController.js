import Especialidad from "../../models/citas_medicas/Especialidad.js";

const agregar= async(req, res) => {
//evitar especialidades repetidas
    const {nombreEspecialidad}=req.body;
    const existeEspecialidad=await Especialidad.findOne({nombreEspecialidad});

    if(existeEspecialidad){
        const error= new Error("Especialidad ya existe en la base de datos.");
        return res.status(400).json({msg: error.message, ok:"NO"});
    }

    try {
        const especialidad= new Especialidad(req.body);
        const especialidadGuardada= await especialidad.save();
        res.json({body: especialidadGuardada, ok: "SI", msg: "Especialidad creada correctamente"})
    } catch (error) {
        console.log(error);
        
    }
}

const listar= async(req, res) => {
    const especialidades= await Especialidad.find()
    res.json(especialidades)
}

const eliminar= async(req, res) => {
     //recibir los parametros por la url
     const {id}= req.params;
    
     //validar si existe el usuario
     const especialidad = await Especialidad.findById(id);
 
     if(!especialidad){
         const error=new Error("Especialidad no encontrada.");
         return res.status(404).json({msg: error.message, ok: "NO"});
     }
 
     try {
         await especialidad.deleteOne();
         res.json({msg: "Especialidad eliminada correctamente.", ok: "SI"});
     } catch (error) {
         console.log(error);
         
     }
}

const editar= async(req, res) => {
    //recibir los parametros por la url
   const {id}= req.params;
    
   //validar si existe el id a eliminar
   const especialidad = await Especialidad.findById(id);

   if(!especialidad){
       const error=new Error("Especialidad no encontrada.");
       return res.status(404).json({msg: error.message, ok: "NO"});
   }

   //RECIBIR LOS DATOS ENVIADOS DESDE EL FORMULARIO
   especialidad.nombreEspecialidad=req.body.nombreEspecialidad||especialidad.nombreEspecialidad; 
   

   try {
      const especialidadGuardada= await especialidad.save();
      res.json({body: especialidadGuardada, msg: "Especialidad actualizada correctamente", ok: "SI"});
   } catch (error) {
      console.log(error);
      
   }
}

const listarUno= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe el id a eliminar
    const especialidad = await Especialidad.findById(id);

    if(!especialidad){
        const error=new Error("Especialidad no encontrada.");
        return res.status(404).json({msg: error.message, ok: "NO"});
}
    res.json(especialidad);
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}