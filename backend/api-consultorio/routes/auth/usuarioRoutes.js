import  express from "express";
const router= express.Router();
import {agregar,listar,eliminar,editar,listarUno, autenticar} from '../../controllers/auth/usuarioController.js';

//rutas privadas - solo cuando se autentique
router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/:id", editar);
router.delete("/:id", eliminar);

//rutas publicas - sin necesidad de autenticarse
router.post("/login", autenticar)

export default router;