import mongoose, { Mongoose } from "mongoose";

const formulaMedicaSchema= mongoose.Schema({
    fechaFormula:{
        type: Date,
        require: true,
        trim: true
    },
    idHistoriaClinica:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"HistoriaClinica",
        require: true,
        trim: true
    },

    idMedicamento:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Medicamento",
        require: true,
        trim: true
    },
    cantidadMedicamento:{
        type: Number,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const FormulaMedica= mongoose.model("FormulaMedica", formulaMedicaSchema);
export default FormulaMedica;