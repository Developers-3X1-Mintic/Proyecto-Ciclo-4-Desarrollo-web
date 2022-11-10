import ex from "express"
import productoRoutes from "./routes/productos_routes.js"

const app = ex()
app.use(productoRoutes)

export default app