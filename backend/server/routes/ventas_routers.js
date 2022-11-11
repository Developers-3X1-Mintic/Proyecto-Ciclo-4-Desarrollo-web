import {Router} from "express";
import { obtenerVentas, buscarVentaID, crearVenta} from "../controllers/ventasController.js"

const routerVenta = Router()

routerVenta.get("/ventas", obtenerVentas)
routerVenta.get("/ventas/:id", buscarVentaID)
routerVenta.post("/ventas", crearVenta)

export default routerVenta