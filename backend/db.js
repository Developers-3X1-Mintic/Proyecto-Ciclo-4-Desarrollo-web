import Mongo from "mongoose"

Mongo.connect("mongodb+srv://developers:123Rr@clusterprinc.crxbi6b.mongodb.net/developers3x1?retryWrites=true&w=majority")
.then(() => console.log("Connexion con Mongo exitosa"))
.catch((err) => console.log(err))

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
        _id:4,
        imagen:"imagen005.jpg",
        cantidad:12,
        nombreProducto:"juguete prueba",
        valor:34555,
        descripcion:"descripcion del juguete de prueba"
    })
    await documento.save()
}

export {Insertar}