import { productoModelo } from "../../models/Producto.js"

export const obtenerProductos = (req, resp) => {
    let productos = productoModelo.find()
    resp.send(productos)
}
export const crearProductos = (req, resp) => { resp.send("nuevo producto creado")}
export const actualizarProductos =  (req, resp) => { resp.send("actualizando un producto")}
export const eliminarProductos =  (req, resp) => { resp.send("eliminando un producto")}
export const buscarProductosID =  (req, resp) => { resp.send("obteniendo un producto")}

