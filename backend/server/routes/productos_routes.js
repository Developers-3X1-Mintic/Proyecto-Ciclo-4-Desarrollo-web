import {Router} from "express"
import {obtenerProductos, crearProductos, actualizarProductos, eliminarProductos, buscarProductosID} from "../controllers/productosController.js"

const router = Router()

router.get("/productos", obtenerProductos)
router.post("/productos", crearProductos)
router.put("/producto/:id", actualizarProductos) //636c66596c273d9b46b3daa2
router.delete("/producto/:id", eliminarProductos)

router.get("/producto/:id", buscarProductosID)

export default router