import ex from "express"
import productoRoutes from "./routes/productos_routes.js"
import fileUpload from "express-fileupload";
import routerCarrito from "./routes/carrito_routes.js";

const app = ex()
//midelware
app.use(ex.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "./files"

}))

//Routes
app.use(productoRoutes)
app.use(routerCarrito)

export default app