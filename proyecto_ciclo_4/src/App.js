import './App.css';
import { useState } from 'react';
import VistaCliente from './componentes/vistaCliente';
import VistaAdmin from './componentes/vistaAdmin';
import Footer from './componentes/footer';


function App() {
  let [vista, setVista] = useState(<VistaCliente />)

  function cambiarVistaAdmin() {
    setVista(vista = <VistaAdmin />);
  }

  function cambiarVistaCliente() {
    setVista(vista = <VistaCliente />);
  }

  return (
    <div className="App d-flex flex-column h-100">
      <div className='nav-usuario'>
        <div className='container ctn-btn'>
          <button className='btnUsuario ms-auto ' onClick={cambiarVistaAdmin}>Administrador</button>
          <button className='btnUsuario' onClick={cambiarVistaCliente}>Cliente</button>
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
