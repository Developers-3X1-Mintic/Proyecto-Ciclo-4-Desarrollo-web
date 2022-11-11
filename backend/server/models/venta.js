import Mongo from "mongoose"

const ventaSchema = new Mongo.Schema({
    fecha:{type:Date,default:Date.now},
    id_user:{
        type: Mongo.Types.ObjectId,
        required: true,
    },


    items:[{
        _id:Mongo.Types.ObjectId,
        valor:Number,
        cantidad:Number,
        nombre:String
        
    }]
}, {versionKey:false})

export const VentaModelo = Mongo.model("venta",ventaSchema);


    