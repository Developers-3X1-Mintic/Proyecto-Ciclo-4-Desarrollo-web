import { useState } from "react";
import "../assets/css/StyleCuerpo.css"


export const ListaUsuariosAdmin = () => {
    let [datosUsuarios, setDatos] = useState("")

    fetch("http://localhost:5050/usuario")
    .then(resp => resp.json())
    .then(datosw => {
        setDatos(datosUsuarios) 
    })

    return (
        <div>
            <div>
                <h1 className="text-center">Lista de Usuarios</h1>
            </div>
            <div className="p-3">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" className="text-center">Id</th>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-center">Email</th>
                        <th scope="col" className="text-center">Rol</th>
                        </tr>
                    </thead>
                    <tbody>{datosUsuarios.map((elemento, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{elemento._id}</td>
                                <td>{elemento._nombre}</td>
                                <td>{elemento._email}</td>
                                <td>{elemento._rol}</td>
                            </tr>
                        )
                    }
                        
                    )}</tbody>
                    
                </table>
            </div>
        </div>
    )

}