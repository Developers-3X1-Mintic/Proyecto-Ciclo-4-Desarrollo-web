import {Router} from "express";
import { obtenerCarritos, crearCarrito, eliminarCarrito, actualizarCarrito, buscarCarritoID, buscarCarritoByCliente } from "../controllers/carritoController.js";

const routerCarrito = Router()

routerCarrito.get("/carritos", obtenerCarritos)
routerCarrito.post("/carritos", crearCarrito)
routerCarrito.delete("/carritos/:id", eliminarCarrito)
routerCarrito.put("/carritos/:id", actualizarCarrito)

routerCarrito.get("/carritos/:id", buscarCarritoID)
routerCarrito.get("/carrito/cliente/:id", buscarCarritoByCliente)

export default routerCarrito
