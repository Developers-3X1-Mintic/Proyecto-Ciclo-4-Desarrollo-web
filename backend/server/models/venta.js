import Mongo from "mongoose"

const ventaSchema = new Mongo.Schema({
    fecha:{type:Date,default:Date.now},
    cliente:{
        id: Mongo.Types.ObjectId,
        nombre:String
    },


    items:[{
        _id:String,
        valor:Number,
        cantidad:Number,
        nombre:String
        
    }]
}, {versionKey:false})

export const VentaModelo = Mongo.model("venta",ventaSchema);


    