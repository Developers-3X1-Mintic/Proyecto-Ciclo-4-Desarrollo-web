import React from "react";

function ItemListaProd (propiedades) {
    return (
        <tr>
            <td>
                <img src={propiedades.imagen} width={100}/>
            </td>
            <td className="casillaCantidad"><input type="number" value={propiedades.cantidad}/></td>
            <td>{propiedades.producto}</td>
            <td>$ {propiedades.valor}</td>
            <td>$ {propiedades.valor*propiedades.cantidad}</td>
            <td><button className="btn btnEliminarProd" onClick={propiedades.funcion} idele={propiedades.idele} >Eliminar</button></td>
        </tr>
         
    )
}

export default ItemListaProd