import logopri from "../assets/img/logoDevelopers.svg";
import React, { useState } from "react"
import "../assets/css/StyleCuerpo.css"
import ListaCarrito from "./listaCarritoClientes"


function VistaCliente() {
  

  let [cuerpo, setCuerpo] = useState(<div>Lista de productos</div>)

  function cambiarCuerpoLista() {
    setCuerpo(cuerpo = <div>Lista de productos</div>);
    let activos = document.getElementsByClassName("nav-link");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnListProd").className += " active"
  }

  function cambiarCuerpoCarrito() {
    setCuerpo(cuerpo = <ListaCarrito />);

    let activos = document.getElementsByClassName("nav-link");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnCarrito").className += " active"

    
  }

  return (
    <div className="w-100">
      <header className="flex-grow-1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid justify-content-between">
              <div className="navbar-brand" ><img className="logo_pri" src={logopri} alt="logo" /></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <button className="nav-link boton-menu" onClick={cambiarCuerpoLista} id="btnListProd" >Lista productos</button>
                  <button className="nav-link boton-menu" onClick={cambiarCuerpoCarrito} id="btnCarrito" >Carrito</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="w-100">
        <div className="container">
          <div className="row p-5">
            {cuerpo}
          </div>
        </div>
      </section>
    </div>

  );
}

export default VistaCliente