import React, { useState } from "react";
//import Productos from "../assets/productos.json";
import "../assets/css/listaProdt.css"


const ruta = require.context("../assets/img/", true);

const ListaProductoCliente = () => {
   // let [datos, setDatos] = useState(Productos)

   let productos = traerDatos();
   let [datos, setDatos] = useState(productos);
    return (
        <div>
            <div>
                <h1 className="text-center">Lista de productos</h1>
            </div>
            <div className="p-3">
                <div className="row">
                    {datos.map((dato) => {
                        return (
                            <div className="col-3 p-1">
                                <div className="cajaimagen">
                                    <div className="imagen p-2">
                                        <img src={ruta('./' + dato.imagen)} width="100%" />
                                    </div>
                                    <div className="descripcion mt-5 p-2">
                                        <h4>{dato.nombreProducto}</h4>
                                        <p>$ {dato.valor}</p>
                                        <p>Stock: {dato.cantidad}</p>
                                        <button className="btn btncarrito" type="button">Agregar a carrito</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

function traerDatos(){
    fetch("http://localhost:5050/productos",{
        method:"get",
        headers: { "Content-Type": "application/json" }
    })
    .then(res=>res.json())
    .then((res)=>{return res})

}

export default ListaProductoCliente