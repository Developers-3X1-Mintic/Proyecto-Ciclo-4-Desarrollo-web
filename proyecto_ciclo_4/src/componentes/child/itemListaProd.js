import React from "react";

function ItemListaProd (propiedades) {
    return (
        <tr>
            <td className="itemCentrado">
                <img src={propiedades.imagen} width={100}/>
            </td>
            <td className="itemCentrado">{propiedades.cantidad}</td>
            <td>{propiedades.producto}</td>
            <td className="itemDerecha">$ {propiedades.valor}</td>
            <td className="itemDerecha">$ {propiedades.valor*propiedades.cantidad}</td>
        </tr>
         
    )
}

export default ItemListaProd