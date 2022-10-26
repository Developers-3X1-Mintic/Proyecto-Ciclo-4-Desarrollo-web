import React, { useState } from "react";
import ItemListaProd from "./child/itemListaProd";
import Productos from "../assets/productos.json";
import "../assets/css/listaProdt.css"

const ruta = require.context("../assets/img/", true);

function ListaProdCliente() {
    let [datos, setDatos] = useState(Productos)

    return (
        <div className="w-100">
            <div>
                <h1 className="text-center">Lista de productos</h1>
            </div>
            <div className="p-3">
                <table className="table w-100 tablaProductos">
                    <thead className="table-dark">
                        <tr>
                            <td className="itemCentrado">Imagen</td>
                            <td className="itemCentrado">Cantidad</td>
                            <td className="itemCentrado">Producto</td>
                            <td className="itemCentrado">Valor</td>
                            <td className="itemCentrado">Total</td>
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
                <button type="button" className="btn btn-warning"><b>Finalizar Compra</b></button>
                <button type="button" className="btn btn-warning ms-3"><b>Cancelar</b></button>
            </div>
        </div>
    )

}

export default ListaProdCliente