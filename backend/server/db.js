import Mongo from "mongoose"
import {MONGODB_URI} from "./config.js"

export async function DBconnection (){
    try {
        const db = await Mongo.connect(MONGODB_URI); 
        console.log("Connexion Mongo altlas con " + db.connection.name)
    } catch(error) {
        console.log(error.message)
    } 
}
  


/*
let esquemaProd = Mongo.Schema({
    _id:Number,
    imagen:String,
    cantidad:Number,
    nombreProducto:String,
    valor:Number,
    descripcion:String
}, {versionKey:false})

let esquemaCarrito = Mongo.Schema({
    _id:Number,
    fecha:Date,
    id_user:Number,
    nombreProducto:Array
}, {versionKey:false})


let modeloProd = Mongo.model("productos", esquemaProd);

let Insertar = async (datos) => {
    console.log("guardando")
    let documento = new modeloProd({
        _id:5,
        imagen:"imagen005.jpg",
        cantidad:12,
        nombreProducto:"juguete prueba",
        valor:34555,
        descripcion:"descripcion del juguete de prueba"
    })
    await documento.save()
}

export {Insertar}*/