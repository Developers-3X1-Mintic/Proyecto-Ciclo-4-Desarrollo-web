import { useState } from "react";
import "../assets/css/StyleCuerpo.css"
import { ProductoAdminList } from "./child/productoAdminList.js";


const ListaProductosAdmin = () => {
    let [datosProd, setDatos] = useState("")

    fetch("http://localhost:5050/productos")
    .then(resp => resp.json())
    .then(datosw => {
        setDatos(datosProd = datosw.map(dato => {
            return <ProductoAdminList producto={dato} />
       }))
    })

    return (
        <div>
            <div>
                <h1 className="text-center">Lista de productos</h1>
            </div>
            <div className="p-3">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" className="text-center">Miniaura</th>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-center">Stock</th>
                        <th scope="col" className="text-center">Precio</th>
                        <th scope="col" className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>{datosProd}</tbody>
                    
                </table>
            </div>
        </div>
    )

}

export {ListaProductosAdmin}