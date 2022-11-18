import {Router} from "express";
import {obtenerUsuarios, crearUsuarios, actualizarUsuario, eliminarUsuario, buscarUsuarioID, loginUser} from "../controllers/usuarioController.js"

const routerUsuario = Router()

routerUsuario.get("/usuarios", obtenerUsuarios)
routerUsuario.post("/usuarios", crearUsuarios)
routerUsuario.put("/usuario/:id", actualizarUsuario) //636c66596c273d9b46b3daa2
routerUsuario.delete("/usuario/:id", eliminarUsuario)
routerUsuario.get("/usuario/:id", buscarUsuarioID)
routerUsuario.get("/usuario/:email/:pass", loginUser)
export default routerUsuario 