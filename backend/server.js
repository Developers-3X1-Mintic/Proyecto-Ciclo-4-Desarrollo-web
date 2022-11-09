import ex from "express"
import {Insertar} from "./db.js"

const app = ex()
app.listen("5050", function(){
    console.log("Servidor iniciado")
})

app.get("/agregar", function (pet, res){
    console.log("agregando")
    let datos = {datos:"prueba"}
    Insertar(datos)
    res.send("probando la url")
})