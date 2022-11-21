import logopri from "../assets/img/logoDevelopers.svg";
import { useState } from "react"
import "../assets/css/StyleCuerpo.css"
import ListaCarrito from "./listaCarritoClientes"
import ListaProductoCliente from "./listaProductosClientes"

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


function VistaCliente() {
  

  let [cuerpo, setCuerpo] = useState(<ListaProductoCliente />)

  function cambiarCuerpoLista() {
    //cambia la vista a lista de produtos
    setCuerpo(cuerpo = <ListaProductoCliente />);
    let activos = document.getElementsByClassName("nav-link");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnListProd").className += " active"
  }

  function cambiarCuerpoCarrito() {
    //cambia la vista a carrito
    setCuerpo(cuerpo = <ListaCarrito />);

    let activos = document.getElementsByClassName("nav-link");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnCarrito").className += " active"

    
  }

  return (
    <div className="w-100 fondo-blanco">
      <BrowserRouter>
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
                    <Link to="/" className="nav-link boton-menu">Productos</Link>
                    <Link to="/carrito" className="nav-link boton-menu">Carrito</Link>
                    {/*<button  onClick={cambiarCuerpoLista} id="btnListProd" >Lista productos</button>
                    <button  onClick={cambiarCuerpoCarrito} id="btnCarrito" >Carrito</button>*/}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="w-100">
        <div className="container">
          <div className="row p-5">
            <Routes>
              <Route path="/" element={<ListaProductoCliente />} />
            </Routes>
          </div>
        </div>
      </section>
      </BrowserRouter>
      {/*
      
            {cuerpo}
          </div>
        */}
    </div>

  );
}

export default VistaCliente