import mongoose, { Mongoose } from "mongoose";

const medicamentoSchema= mongoose.Schema({
    codigoMedicamento: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },

    nombreMedicamento:{
        type: String,
        require: true,
        trim: true
    },

    tipoMedicamento:{
        type: Number,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const Medicamento= mongoose.model("Medicamento", medicamentoSchema);
export default Medicamento;