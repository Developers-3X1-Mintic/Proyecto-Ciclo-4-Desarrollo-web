import {DBconnection} from "./db.js"
import {PORT} from "./config.js"
import app from "./app.js"

DBconnection() 

app.listen(PORT, function(){
    console.log("Servidor iniciado")
})
/*
app.post("/admin/agregar_producto", function (pet, res){
    console.log("agregando")
    let datos = {
        id:5,
        imagen:"imagen005.jpg",
        cantidad:12,
        nombre:"juguete prueba",
        valor:34555,
        descripcion:"descripcion del juguete de prueba"
    }
    Insertar(datos)
    res.send("datos subidos exitosamente")
})*/