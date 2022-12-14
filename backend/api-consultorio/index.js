//incluir dependencias
//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cors from "cors";

//importar archivos de rutas

import rolRoutes from "./routes/auth/rolRoutes.js";
import usuarioRoutes from "./routes/auth/usuarioRoutes.js";
import especialidadRoutes from "./routes/citas_medicas/especialidadRoutes.js";
import agendaCitaRoutes from "./routes/citas_medicas/agendaCitaRoutes.js";
import reservaCitaRoutes from "./routes/citas_medicas/reservaCitaRoutes.js";
import formulaMedicaRoutes from "./routes/historia_clinica/formulaMedicaRoutes.js";
import historiaClinicaRoutes from "./routes/historia_clinica/historiaClinicaRoutes.js";
import medicamentoRoutes from "./routes/historia_clinica/medicamentoRoutes.js";


//iniciar el servidor de express
const app = express();
app.use(express.json()); //para leer datos en formato json

//permitir leer archivos .env
dotenv.config();

//conectar el backend a la base de datos
conectarDB();

//permitir conexiones entrantes de otros host o dominios con cors

const listaBlanca= [process.env.FRONTEND_URL];
const corsOpciones={
    origin: function(origin,callback){
        if (listaBlanca.includes(origin)) {
            //puede consultar el api
            callback(null, true);
        }else{
            //no esta permitido
            callback(new Error("Error de cors. No tiene permisos."))
        }
    }
};

//app.use(cors(corsOpciones));
app.use(cors());

//definicion de rutas
app.use("/api/roles", rolRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/especialidades", especialidadRoutes);
app.use("/api/agenda-citas", agendaCitaRoutes);
app.use("/api/reserva-citas", reservaCitaRoutes);
app.use("/api/formula-medica", formulaMedicaRoutes);
app.use("/api/historia-clinica", historiaClinicaRoutes);
app.use("/api/medicamento", medicamentoRoutes);

//leyendo el puerto desde la variable de ambiente
const PORT= process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
}); 