import { ProductoModelo } from "../../models/Producto.js"

export const obtenerProductos = async (req, resp) => {
    let productos = await ProductoModelo.find()
    resp.send(productos)
}
export const crearProductos = async (req, resp) => { 
    const {nombreProducto, imagen, stock, precio, descripcion} = req.body
    const newProducto = new ProductoModelo({ nombreProducto, imagen, stock, precio, descripcion })

    await newProducto.save()
    return resp.json(newProducto)
}

export const actualizarProductos = async (req, resp) => { 
    const producto = await ProductoModelo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return resp.json(producto)
}

export const eliminarProductos = async (req, resp) => { 
    const deleteP = await ProductoModelo.findByIdAndDelete(req.params.id)

    if(!deleteP){
        return resp.sendStatus(404)
    } else {
        return resp.sendStatus(204)
    }
}

export const buscarProductosID =  (req, resp) => { 
    console.log(req.params.id)
    let producto = ProductoModelo.findById(req.params.id)
    resp.send(producto)
}


/*{
  "nombreProducto":"Juguete carrito",
  "imagen":"juguete_04.jpg",
  "stock":34,
  "precio":13400,
  "descripcion":"Carrito para niños entre los 12 y 15 años"
}*/