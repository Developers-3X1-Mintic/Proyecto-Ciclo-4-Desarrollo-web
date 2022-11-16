import './App.css';
import { useState } from 'react';
import VistaCliente from './componentes/vistaCliente';
import VistaAdmin from './componentes/vistaAdmin';
import Footer from './componentes/footer';


function App() {
  let [vista, setVista] = useState(<VistaCliente />)

  function cambiarVistaAdmin() {
    setVista(vista = <VistaAdmin />);

    let activos = document.getElementsByClassName("btnUsuario");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnAdmin").className += " active"
  }

  function cambiarVistaCliente() {
    setVista(vista = <VistaCliente />);

    let activos = document.getElementsByClassName("btnUsuario");
    for (var i = 0; i < activos.length; i++) {
      activos[i].classList.remove("active");
    }

    document.getElementById("btnCliente").className += " active"
  }

  return (
    <div className="App d-flex flex-column h-100">
      <div className='nav-usuario'>
        <div className='container ctn-btn'>
          <button className='btnUsuario ms-auto ' onClick={cambiarVistaAdmin} id="btnAdmin">Administrador</button>
          <button className='btnUsuario active' onClick={cambiarVistaCliente} id="btnCliente">Cliente</button>
        </div>
        
      </div>
      <div className='flex-grow-1' >
        {vista}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
