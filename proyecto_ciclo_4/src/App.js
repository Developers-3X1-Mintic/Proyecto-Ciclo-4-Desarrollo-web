import './App.css';
import Header from './componentes/header';
import CuerpoPag from "./componentes/cuerpoPag";
import Footer from './componentes/footer';


function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Header/>
      <CuerpoPag/>
      <Footer/>
    </div>
  );
}

export default App;
