import Mongo from "mongoose"


const carritoSchema = new Mongo.Schema({
    fecha:Date,
    id_user:{
        type: ObjectId,
        required: true,
    },
    Productos:[{
        idProd:ObjectId,
        cantidad:Number
    }]
}, {versionKey:false})

export default Mongo.model("Carrito",carritoSchema)