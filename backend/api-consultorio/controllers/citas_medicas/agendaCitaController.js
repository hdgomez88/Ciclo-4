import AgendaCita from "../../models/citas_medicas/AgendaCita.js";
import dominios from "../../helpers/dominios.js";

const agregar= async(req, res) => {
    const {idMedico,fechaCita,horaCita}=req.body;
    const existeAgendaCita = await AgendaCita.findOne({idMedico,fechaCita,horaCita});

    if(existeAgendaCita){
        const error = new Error("Ya existe una Agenda de Cita con la fecha y hora asignada.");
        return res.status(400).json({msg:error.message, ok: "NO"});
    }

    try {
        const agendaCita= new AgendaCita(req.body);
        const agendaCitaGuardada= await agendaCita.save();
        res.json({body: agendaCitaGuardada, ok: "SI", msg: "Agenda de Cita creada correctamente"})
    } catch (error) {
        console.log(error);
        
    }
}

const listar= async(req, res) => {
    const agendaCitas= await AgendaCita.find(        
    ).populate(
        'idMedico',{
            nombreUsuario:1,
            apellidosUsuario:1,
            _id:0
        }
    ).populate( 
        'idEspecialidad',{
            nombreEspecialidad:1, 
            _id:0
        }
    )
    res.json(agendaCitas)
}

const eliminar= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe la agenda
    const agendaCita = await AgendaCita.findById(id);

    if(!agendaCita){
        const error=new Error("Agenda de Cita no encontrada.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }

    try {
        await agendaCita.deleteOne();
        res.json({msg: "Agenda de Cita eliminada correctamente.", ok: "SI"});
    } catch (error) {
        console.log(error);
        
    }
}

const editar= async(req, res) => {
    //recibir los parametros por la url
   const {id}= req.params;
    
   //validar si existe el id a eliminar
   const agendaCita = await AgendaCita.findById(id);

   if(!agendaCita){
       const error=new Error("Agenda de Cita no encontrada.");
       return res.status(404).json({msg: error.message, ok: "NO"});
   }

   //RECIBIR LOS DATOS ENVIADOS DESDE EL FORMULARIO
   agendaCita.idMedico=req.body.idMedico || agendaCita.idMedico;
   agendaCita.idEspecialidad=req.body.idEspecialidad || agendaCita.idEspecialidad;
   agendaCita.fechaCita=req.body.fechaCita || agendaCita.fechaCita;
   agendaCita.horaCita=req.body.horaCita || agendaCita.horaCita;
   agendaCita.numeroConsultorio= req.body.numeroConsultorio ||agendaCita.numeroConsultorio;
   agendaCita.estadoCita=req.body.estadoCita || agendaCita.estadoCita;
   

   try {
      const agendaCitaGuardada= await agendaCita.save();
      res.json({body: agendaCitaGuardada, msg: "Agenda de Cita actualizada correctamente", ok: "SI"});
   } catch (error) {
      console.log(error);
      
   }
}

const listarUno= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe el id a eliminar
    const agendaCita = await AgendaCita.findById(id);

    if(!agendaCita){
        const error=new Error("Agenda de Cita no encontrada.");
        return res.status(404).json({msg: error.message, ok: "NO"});
}
    res.json(agendaCita); 
}

const citasDisponibles= async(req, res) => {
    const agendaCitas= await AgendaCita.find({"estadoCita":dominios.ESTADO_AGENDA_CITA_DISPONIBLE}      
    ).populate(
        'idMedico',{
            nombreUsuario:1,
            apellidosUsuario:1,
            _id:1
        }
    ).populate( 
        'idEspecialidad',{
            nombreEspecialidad:1, 
            _id:1
        }
    )
    res.json(agendaCitas)
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
    citasDisponibles 
}