import ex from "express"
import productoRoutes from "./routes/productos_routes.js"

const app = ex()
//midelware
app.use(ex.json())
//Routes
app.use(productoRoutes)

export default app