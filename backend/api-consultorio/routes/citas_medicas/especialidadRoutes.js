import  express from "express";
const router= express.Router();
import {agregar,listar,eliminar,editar,listarUno} from '../../controllers/citas_medicas/especialidadController.js';

//rutas privadas - solo cuando se autentique
router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/:id", editar);
router.delete("/:id", eliminar);

//rutas publicas - sin necesidad de autenticarse

export default router;