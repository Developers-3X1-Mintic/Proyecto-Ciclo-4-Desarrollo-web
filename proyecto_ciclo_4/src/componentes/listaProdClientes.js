import React, { useState } from "react";
import ItemListaProd from "./child/itemListaProd";
import Productos from "../assets/productos.json";
const ruta = require.context("../assets/img/", true);

function ListaProdCliente() {
    let [datos, setDatos] = useState(Productos)

    return (
        <div className="w-100">
            <div>
                <h1 className="text-center">Lista de productos</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map( (dato) => {
                          return(
                            <ItemListaProd
                                imagen={ruta('./' + dato.imagen)}
                                cantidad={dato.cantidad}
                                producto={dato.nombreProducto}
                                valor={dato.valor} />
                          )  
                        })}
                    </tbody>
                </table>
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-warning">Finalizar Compra</button>
                <button type="button" className="btn btn-warning ms-3">Cancelar</button>
            </div>
        </div>
    )

}

export default ListaProdCliente