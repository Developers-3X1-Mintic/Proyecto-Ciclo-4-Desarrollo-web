import { useState } from "react";
import Productos from "../assets/productos.json";
import "../assets/css/modificarProducto.css"
import axios from "axios"
//import FormProductoEditar from "./child/formProductEdit"

const ruta = require.context("../assets/img/", true);

const ModificarProducto = () => {
    let [datos2, setDatos] = useState(Productos)
    let [caja, setCaja] = useState(<div>Seleccione un producto a modificar</div>)

    const guardar =  async () => {
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]').files[0];
        console.log(fileField)
        formData.append('nombreProducto', document.getElementById("nombre_producto").value);
        formData.append('descripcion', document.getElementById("descripcion").value);
        formData.append('precio', document.getElementById("precio").value);
        formData.append('stock', document.getElementById("stock").value);
        formData.append('imagen', fileField);
        

        fetch('http://localhost:5050/productos', {
        method: 'POST',
        body: formData
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        await axios.post("https://localhost:5050/productos", formData)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="w-100">
            <div>
                <h1 className="text-center">Producto Nuevo</h1>
            </div>
            <div className="row p-3 mt-5 justify-content-center d-flex">
                <div className="col-10 col-md-6 col-lg-5">
                    <form enctype="multipart/form-data" id="formulario">
                        <div className="row">
                            <label className="col-sm-2 col-form-label" >Nombre: </label>
                            <input className="form-control" name="nombreProducto" id="nombre_producto" type="text" required  />
                        </div>
                        <div className="row">
                            <label className="col-sm-12 col-form-label">Descripcion: </label>
                            <textarea className="form-control" name="descripcion" id="descripcion" ></textarea>
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label" >Precio: </label>
                            <input className="form-control" name="precio" id="precio" type="number" required />
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label" >Stock: </label>
                            <input className="form-control" type="number" name="stock" id="stock" required />
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label" >Imagen: </label>
                            <input className="form-control" name="imagen" type="file" />
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-primary my-5" onClick={() => guardar()} >Guardar</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )

    
}



export { ModificarProducto }