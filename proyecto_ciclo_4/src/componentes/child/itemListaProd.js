import React from "react";

function ItemListaProd (propiedades) {
    return (
        <tr>
            <td>
                <img src={propiedades.imagen} width={100}/>
            </td>
            <td>{propiedades.cantidad}</td>
            <td>{propiedades.producto}</td>
            <td>$ {propiedades.valor}</td>
            <td>$ {propiedades.valor*propiedades.cantidad}</td>
            <td><button onClick={propiedades.funcion} idele={propiedades.idele} >Editar</button></td>
        </tr>
         
    )
}

export default ItemListaProd