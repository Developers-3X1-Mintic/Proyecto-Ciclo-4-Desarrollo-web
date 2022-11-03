import ex from "express"
import "./db.js"

const app = ex()
app.listen("5050", function(){
    console.log("Servidor iniciado")
})