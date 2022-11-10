export const obtenerProductos = (req, resp) => {
    resp.send([])
}
export const crearProductos = (req, resp) => { resp.send("nuevo producto creado")}
export const actualizarProductos =  (req, resp) => { resp.send("actualizando un producto")}
export const eliminarProductos =  (req, resp) => { resp.send("eliminando un producto")}
export const buscarProductosID =  (req, resp) => { resp.send("obteniendo un producto")}