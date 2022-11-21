import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login.js"
import { ListaProductosAdmin } from "./listaProductosAdmin.js"
import { ModificarProducto } from "./modificarProducto.js"
import { ListaVentas } from "./listaVentas.js"
import { ListaProductoCliente } from "./listaProductosClientes.js"
import { ListaCarrito } from "./listaCarritoClientes.js"


export const Navegacion = ({ rol, id_user }) => {
  return (
    <section className={rol === "admin" || rol === "user" ? ("w-100 fondo-blanco") : ("w-100")}>
      <div className="container">
        <div className="row p-5"></div>
        <Routes>
          {rol === "admin" || rol === "user" ? (
            <Fragment>
              {rol === "admin" ? (
              <>
              <Route path="/" element={<div>Inicio</div>} />
              <Route path="/lista_productos_admin" element={<ListaProductosAdmin />} />
              <Route path="/crear_productos" element={<ModificarProducto />} />
              {/*<Route path="/modificar_productos/:id" element={<ModificarProducto id={Route.id} />} />*/}
              <Route path="/lista_ventas" element={<ListaVentas />} />
              <Route path="/crear_usuario" element={<ListaVentas />} />
              </>
              ) : (
              <>
                <Route path="/" element={<ListaProductoCliente id={id_user} />} />
                <Route path="/carrito" element={<ListaCarrito id={id_user} />}  />
              </>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <Route path="/" element={< Login />} />
            </Fragment>
          )}
        </Routes>
      </div>
    </section>
  );
};