import React, { useState } from "react";
//import Ventas from "../assets/ventas.json";
const ruta = require.context("../assets/img/", true);

function ListaVentas() {
    
    //let [datos, setDatos] = useState(Ventas)


    let ventas = traerDatos();
    let [datos, setDatos] = useState(ventas);
    let total = 0;


    return (
        <div className="w-100">
           <div><div>
        <h1 className="text-center">Lista de Ventas</h1>
    </div>
    <div className="p-3">
        <table className="table w-100">
            <thead className="table-dark">
                <tr>
                    <td>Fecha</td>
                    <td>idVenta</td>
                    <td>Valor</td> 
                </tr>
            </thead>
            <tbody>
                {datos.map( (dato) => {
                    total += dato.valor;
                  return(
                    <tr>
                        <td>{dato.fecha}</td>
                        <td>{dato.id}</td>
                        <td className="text-end">$ {dato.valor}</td>
                    </tr>  
                  )  
                })}
                <tr>
                        <td></td>
                        <td className="text-end"><b>Total</b></td>
                        <td className="text-end"><b>$ {total}</b></td>
                </tr> 
            </tbody>
        </table>
    </div>
    </div>
        </div>
    )

}

function traerDatos(){
    fetch("http://localhost:5050/ventas",{
        method:"get",
        headers: { "Content-Type": "application/json" }
    })
    .then(res=>res.json())
    .then((res)=>{return res})

}

export default ListaVentas