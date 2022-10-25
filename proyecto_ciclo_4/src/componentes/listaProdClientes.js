import React from "react";
import ItemListaProd from "./child/itemListaProd";
import Productos from "../assets/productos.json"

class ListaProdCliente extends React.Component {
    render () {
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
                            <ItemListaProd
                                imagen="https://http2.mlstatic.com/D_NQ_NP_781113-MCO48982954480_012022-O.jpg"
                                cantidad={1}
                                producto="Juguete Corazón"
                                valor={50}/>
                            <ItemListaProd
                                imagen="https://img.elo7.com.br/product/600x380/1495CD4/chapeu-espuma-sol-festas.jpg"
                                cantidad={2}
                                producto="Sol de espuma"
                                valor={100}/>
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

}

export {ListaProdCliente}