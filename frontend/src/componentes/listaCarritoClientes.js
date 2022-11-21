import { useState } from "react";
import { ItemCarrito } from "./child/itemCarrito.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { srvBck } from '../constantes.js'
import { useCookies } from "react-cookie"



function ListaCarrito() {
    const [cookies, setCookie, removeCookie] = useCookies(['carrito', 'name_user', 'id_user']);
    const [show, setShow] = useState(false);

    let actTotal = null
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleComprar = () => {
        setShow(false)
        let carritoNew = cookies.carrito
        /*Aquí se debería validar si la cantidad de objetos en el carrito corresponden al stock disponible*/
        let venta = {
            cliente:{
                id: cookies.id_user,
                nombre: cookies.name_user
            },
            items: carritoNew
        }

        fetch('http://localhost:5050/ventas/', {
        method: 'POST',
        body: JSON.stringify(venta)
        })
        .then(resp => resp.json())
        .then(datos => console.log(datos))
    }

    let [campo, setCampo] = useState("")
    
    let carrito = cookies.carrito

    if (carrito === undefined) {
        carrito = []
    }
    let tot = 0
    carrito.forEach(element => {
        tot += element.precio * element.cantidad
    });
    const [total, setTotal] = useState(tot);
    

    const deleteCarrito = (acc) => {
        if (window.confirm("¿Esta seguro de vaciar el carrito?")) {
            setCookie("carrito", [], { path: '/' })
            setCampo(campo = <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>)
        }

    }

    const actualizarTotal = () => {
        let productos = cookies.carrito
        let totalNew = 0

        productos.forEach((elemt) => {
            totalNew += elemt.precio*elemt.cantidad
        })
        console.log(totalNew)
        setTotal(total = totalNew)
    }

    let actuaTotal = (valor) => {
        
        tot = 0
        
        console.log(valor)
        setTotal(total = 13333)
    }


    return (
        <div className="w-100">
            <div>
                <h1 className="text-center">Carrito de compra</h1>
            </div>
            <div className="p-3">
                <Table className="align-middle">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center d-none d-lg-table-cell">Imagen</th>
                            <th className="text-center">Und</th>
                            <th className="text-center">Producto</th>
                            <th className="text-center">Valor Unitario</th>
                            <th className="text-center">Total</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {carrito.map((prod, ind) => {
                            //setTotal(total += prod.precio * prod.cantidad)
                            return (<ItemCarrito key={ind}
                                ind={ind}
                                precio={prod.precio}
                                imagen={prod.imagen}
                                cantidad={prod.cantidad}
                                idele={prod.id}
                                llamar={actuaTotal} />)
                        })}
                        <tr><td colSpan={4}></td><td>Total</td><td className="text-end"><b>{total}</b></td><td></td></tr>
                    </tbody>
                </Table>
            </div>
            <div className="text-end mb-5">

                <button type="button" onClick={actualizarTotal} className="btn btn-dark">Actulizar carrito</button>
                <button type="button" onClick={deleteCarrito} className="btn btn-dark ms-3">Vaciar carrito</button>
                <Button type="button" variant="dark" onClick={handleShow} className="ms-3">Finalizar Compra</Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pagar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>tu compra es por un valor de {total}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleComprar}>
                            Finalizar compra
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )

}




export { ListaCarrito }