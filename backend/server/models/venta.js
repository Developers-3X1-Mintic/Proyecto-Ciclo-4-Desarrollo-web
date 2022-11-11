import Mongo from "mongoose"

const ventaSchema = new Mongo.Schema({
    fecha:{type:Date,default:Date.now},
    id_user:{
        type: ObjectId,
        required: true,
    },


    items:[{
        idProd:ObjectId,
        valor:Number,
        cantidad:Number
        
    }]
})

export const VentaModelo = Mongo.model("ventas",ventaSchema);


    