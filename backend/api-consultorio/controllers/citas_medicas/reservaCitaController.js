import ReservaCita from "../../models/citas_medicas/ReservaCita.js";

const agregar= async(req, res) => {
    try {
        const reservarCita= new ReservaCita(req.body);
        const reservarCitaGuardada= await reservarCita.save();
        res.json({body:reservarCitaGuardada, ok:"SI", msg: "La cita fue reservada exitosamente."})
        
    } catch (error) {
        console.log(error)
    }
}

const listar= async(req, res) => {
    const{id}=req.params;
    const citas=await ReservaCita.find({
        "idUsuario":id}
        ).populate('idAgendaCita').populate('idMedico').populate('idEspecialidad');
    res.json(citas)
}

const eliminar= async(req, res) => {
    //recibir los parametros por la url
    const {id}= req.params;
    
    //validar si existe la agenda
    const reservaCita = await ReservaCita.findById(id); 

    if(!reservaCita){
        const error=new Error("Reserva de Cita no encontrada.");
        return res.status(404).json({msg: error.message, ok: "NO"});
    }

    try {
        await reservaCita.deleteOne();
        res.json({msg: "Reserva de Cita eliminada correctamente.", ok: "SI"});
    } catch (error) {
        console.log(error);
        
    }
}

const editar= async(req, res) => {
    console.log("respuesta desde el metodo editar");
}

const listarUno= async(req, res) => {
    console.log("respuesta desde el metodo listarUno"); 
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}