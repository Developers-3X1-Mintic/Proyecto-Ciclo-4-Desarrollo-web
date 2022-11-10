import Mongo from "mongoose"


const carritoSchema = new Mongo.Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    id_user:{
        type: Mongo.Types.ObjectId,
        required: true
    },
    productos:[{
        idProd:Mongo.Types.ObjectId,
        cantidad:Number
    }]
}, {versionKey:false})

export const CarritoModelo = Mongo.model("carrito",carritoSchema)
