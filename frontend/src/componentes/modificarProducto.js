import React, { useState } from "react";
import Productos from "../assets/productos.json";
import "../assets/css/modificarProducto.css"
import FormProductoEditar from "./child/formProductEdit"

const ruta = require.context("../assets/img/", true);

const ModificarProducto =  () => {
    let [datos2, setDatos] = useState(Productos)
    let [caja, setCaja] = useState(<div>Seleccione un producto a modificar</div>)

    return (
        <div className="w-100">
            <div>
                <h1 className="text-center">Productos a modificar</h1>
            </div>
            <div className="row p-3 mt-5">
                <div className="col-3">
                    <ul className="listaBotones">
                    {datos2.map( (dat, ind) => {
                        return(
                            <li className="itemBtn" key={ind}>
                                <button type="button" className="btn" onClick={() => {cambiarProducto(ind)}} >{dat.nombreProducto}</button>
                            </li>
                        )  
                    })}
                    </ul>
                </div>
                <div className="col-9">{caja}</div>
            </div>
            
        </div>
    )

    function cambiarProducto(indice){
        setCaja(caja= <FormProductoEditar
                        ind={indice}
                        nombre={datos2[indice].nombreProducto}
                        cantidad={datos2[indice].cantidad}
                        descrp={datos2[indice].descripcion} 
                        precio={datos2[indice].valor}
                        imagen={ruta('./' + datos2[indice].imagen)}
                        />)
    }
}



export default ModificarProducto