import {Router} from "express"
import {obtenerProductos, crearProductos, actualizarProductos, eliminarProductos, buscarProductosID} from "../controllers/productosController.js"

const router = Router()

router.get("/productos", obtenerProductos)
router.post("/productos", crearProductos)
router.put("/productos", actualizarProductos)
router.delete("/productos", eliminarProductos)

router.get("/producto/:id", buscarProductosID)

export default router