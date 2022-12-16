import mongoose, { Mongoose } from "mongoose";

const reservaCitaSchema= mongoose.Schema({
    idAgendaCita:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"AgendaCita",
        require: true,
        trim: true
    },

    idUsuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        require: true,
        trim: true
    },

    idMedico:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        require: true, 
        trim: true
    },

    idEspecialidad:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Especialidad",
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const ReservaCita= mongoose.model("ReservaCita", reservaCitaSchema);
export default ReservaCita;