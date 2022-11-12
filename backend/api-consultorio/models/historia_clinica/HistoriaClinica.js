import mongoose, { Mongoose } from "mongoose";

const historiaClinicaSchema= mongoose.Schema({
    idPaciente:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        require: true,
        trim: true
    },

    fechaRegistro: {
        type: Date,
        require: true,
        trim: true,
    },

    horaRegistro: {
        type: Date,
        require: true,
        trim: true,
    },

    temperatura: {
        type: Number,
        require: true,
        trim: true,
    },

    presionArterial: {
        type: Number,
        require: true,
        trim: true,
    },
    
    peso: {
        type: Number,
        require: true,
        trim: true,
    },

    edad: {
        type: Number,
        require: true,
        trim: true,
    },

    estatura: {
        type: Number,
        require: true,
        trim: true,
    },

    diagnostico: {
        type: String,
        require: true,
        trim: true,
    }
}, {
    timestamps: true
});

const HistoriaClinica= mongoose.model("HistoriaClinica", historiaClinicaSchema);
export default HistoriaClinica;