import  express from "express";
const router= express.Router();
import {agregar,listar,eliminar,editar,listarUno,comboRoles} from '../../controllers/auth/rolController.js';
import validarAutenticacion from "../../middleware/validarAutenticacion.js"

//rutas privadas - solo cuando se autentique
router.get("/combo-roles", validarAutenticacion, comboRoles);
router.get("/", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/:id", validarAutenticacion, editar);
router.delete("/:id", validarAutenticacion, eliminar);

//rutas publicas - sin necesidad de autenticarse

export default router;