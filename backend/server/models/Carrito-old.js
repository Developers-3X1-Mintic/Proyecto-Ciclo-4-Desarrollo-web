import Mongo from "mongoose"


const carritoSchema = new Mongo.Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    id_user:{
        type: String,
        required: true
    },
    productos:[{
        _id:String,
        cantidad:Number,
        imagen:String,
        precio:Number
    }]
}, {versionKey:false})

export const CarritoModelo = Mongo.model("carrito",carritoSchema)
