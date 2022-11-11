import {VentaModelo} from "../models/venta.js"

export const obtenerVentas = async (req, resp) => {
    try {
        let ventas = await VentaModelo.find()
        return resp.send(ventas)
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
    
}

export const buscarVentasID = async (req, resp) => { 
    try {
        let venta = await VentaModelo.findById(req.params.id)

        if(!venta){
            return resp.send("no se encontro el producto")
        } else {
            return resp.json(venta)
        }
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

