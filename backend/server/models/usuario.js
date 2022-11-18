import Mongo from "mongoose"

const usuarioSchema = new Mongo.Schema({
    nombre: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    password: {
        type: String,
        required: true
       
        
    },
   
    role: {
        type: String,
        default: 'user'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
   
},{versionKey:false}) 



export const modeloUsuario = Mongo.model("usuario", usuarioSchema)