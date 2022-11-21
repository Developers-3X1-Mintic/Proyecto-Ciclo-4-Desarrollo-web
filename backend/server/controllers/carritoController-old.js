import { CarritoModelo } from "../models/Carrito-old.js";


export const obtenerCarritos = async (req, resp) => {
    try {
        let carritos = await CarritoModelo.find()
        return resp.send(carritos)
    }
    catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
    
}

export const crearCarrito = async (req, resp) => { 
    try {
        const {id_user, productos} = req.body
            
        const newCarrito = new CarritoModelo({id_user, productos})

        await newCarrito.save()
        return resp.json(newCarrito)
    } 
    catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const actualizarCarrito = async (req, resp) => { 
    try {
        const carrito = await CarritoModelo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return resp.json(carrito)
    } 
    catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const eliminarCarrito = async (req, resp) => { 
    try {
        const deleteCarrito = await CarritoModelo.findByIdAndDelete(req.params.id)

        if(!deleteCarrito){
            return resp.sendStatus(404)
        } else {
            return resp.sendStatus(204)
        }
    } 
    catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const buscarCarritoID = async (req, resp) => { 
    try {
        let carrito = await CarritoModelo.findById(req.params.id)

        if(!carrito){
            return resp.send("no se encontró el carrito")
        } else {
            return resp.json(carrito)
        }
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const buscarCarritoByCliente = async (req, resp) => { 
    try {
        let filtro = {id_user:req.params.id}
        let carrito = await CarritoModelo.findOne(filtro)

        if(!carrito){
            return resp.send("")
        } else {
            return resp.json(carrito)
        }
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}