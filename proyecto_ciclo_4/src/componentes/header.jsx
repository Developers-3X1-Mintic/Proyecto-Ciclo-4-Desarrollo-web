import logopri from "../logoDevelopers.svg";
import React from "react"

function Header(){
  return(
    <header className="w-100 d-flex">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid justify-content-between">
            <a className="navbar-brand" href="#">
              <img className="logo_pri" src={logopri} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link px-3" aria-current="page" href="#">Inicio</a>
                <a className="nav-link px-3" href="#">Lista productos A</a>
                <a className="nav-link px-3" href="#">Modificar producto A</a>
                <a className="nav-link px-3" href="#">Lista ventas A</a>
                <a className="nav-link px-3" href="#">Lista productos C</a>
                <a className="nav-link px-3" href="#">Carrito C</a>
                
                <p className="nav-link ms-3">Administrador</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    );
}

export default Header