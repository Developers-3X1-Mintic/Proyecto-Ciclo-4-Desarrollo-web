import React from "react";

function ItemListaProd (propiedades) {
    return (
        <tr>
            <td>
                <img src={propiedades.imagen} width={200}/>
            </td>
            <td>{propiedades.cantidad}</td>
            <td>{propiedades.producto}</td>
            <td>$ {propiedades.valor}</td>
            <td>$ {propiedades.valor*propiedades.cantidad}</td>
        </tr>
         
    )
}

export default ItemListaProd