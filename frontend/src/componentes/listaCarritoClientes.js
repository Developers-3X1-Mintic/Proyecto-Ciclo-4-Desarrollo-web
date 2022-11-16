import React, { useState } from "react";
import ItemListaProd from "./child/itemListaProd";
import Productos from "../assets/productos.json";
const ruta = require.context("../assets/img/", true);

function ListaCarrito() {
    let [datos, setDatos] = useState(Productos)
    let [campo, setCampo] = useState(<div><div>
        <h1 className="text-center">Carrito de compra</h1>
    </div>
    <div className="p-3">
        <table className="table w-100">
            <thead className="table-dark">
                <tr>
                    <td>Imagen</td>
                    <td>Cantidad</td>
                    <td>Producto</td>
                    <td>Valor</td>
                    <td>Total</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {datos.map( (dato) => {
                  return(
                    <ItemListaProd
                        imagen={ruta('./' + dato.imagen)}
                        cantidad={dato.cantidad}
                        producto={dato.nombreProducto}
                        valor={dato.valor}
                        funcion={activar}
                        idele={dato.id}
                        key={dato.id} />
                  )  
                })}
            </tbody>
        </table>
    </div>
    <div className="text-end">
        <button type="button" className="btn btnEliminarProd">Finalizar Compra</button>
        <button type="button" className="btn btnEliminarProd ms-3">Cancelar</button>
    </div></div>)

    function activar(elemento){
        setCampo(campo = <div>
            {elemento.map((obj) => { return obj})}
        </div>)
    }

    return (
        <div className="w-100">
           {campo}
        </div>
    )

}

export default ListaCarrito