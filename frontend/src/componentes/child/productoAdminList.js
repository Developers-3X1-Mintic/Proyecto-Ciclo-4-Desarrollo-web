function ProductoAdminList (props) {
    return (
        <tr>
            <td>
                <img src={props.producto.imagen.url} width={60} />
            </td>
            <td>{props.producto.nombreProducto}</td>
            <td className="casillaCantidad text-center">{props.producto.stock}</td>
            <td className="text-end">$ {props.producto.precio}</td>
            <td className="text-center">
                <button className="btn btnEliminarProd" >Eliminar</button> | <button className="btn btnEliminarProd" >Editar</button>
            </td>
        </tr>
    )
}

export {ProductoAdminList}