import ex from "express"
import productoRoutes from "./routes/productos_routes.js"
import fileUpload from "express-fileupload";

const app = ex()
//midelware
app.use(ex.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "./files"

}))

//Routes
app.use(productoRoutes)

export default app