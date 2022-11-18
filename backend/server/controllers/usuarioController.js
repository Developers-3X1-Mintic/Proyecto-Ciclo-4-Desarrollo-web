

import {modeloUsuario} from "../models/usuario.js"
import  bcrypt from "bcryptjs"


export const obtenerUsuarios = async (req, resp) => {
    try {
        let usuarios = await modeloUsuario.find()
        return resp.send(usuarios)
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
    
}


export const crearUsuarios = async (req, resp) => { 
    try {
        const {nombre, email, password, rol} = req.body
        
        const newUsuario = new modeloUsuario({ nombre, email, password, rol })

        await newUsuario.save()
        return resp.json(newUsuario)
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}


export const actualizarUsuario = async (req, resp) => { 
    try {
        const usuario = await modeloUsuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return resp.json(usuario)
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const eliminarUsuario = async (req, resp) => { 
    try {
        const deleteP = await modeloUsuario.findByIdAndDelete(req.params.id)

        
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}

export const buscarUsuarioID = async (req, resp) => { 
    try {
        let usuario = await modeloUsuario.findById(req.params.id)

        if(!usuario){
            return resp.send("no se encontro el usuario")
        } else {
            return resp.json(usuario)
        }
    } catch (error) {
        return resp.status(500).json({'Error' : error.message})
    }
}


//Iniciar Sesion - Login
export const loginUser = async(req, resp)=>{
    try {
    const email =  req.params.email;
    
    const password = req.params.pass
    //revisar si los campos estan completos
    if (!email || !password){
        return resp.send("Por favor ingrese email & Contraseña")
    }
    console.log(password)
    //Buscar al usuario en nuestra base de datos
    const user = await modeloUsuario.findOne({email})
   console.log(user)
    if(!user){
        return resp.send( "El email es inválido")
    }

    //Comparar contraseñas, verificar si está bien
    //const passcr = await bcrypt.hash(password, 10)
    const validador = await bcrypt.compare(password, user.password)
    console.log(validador)
   

    if (!validador){
        return resp.send("La contraseña no es correcta")
    }else{
        return resp.json(user)
    }
    } catch (error){
        return resp.status(500).json({'Error' : error.message})
    }
    
}
