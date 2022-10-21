import React from "react"
import ListProdCliente from "./child/listProdCliente"

function CuerpoPag(){
  return(
    <section className="w-100 d-flex cuerpo flex-grow-1 p-3">
      <ListProdCliente/>  
    </section>
    );
}

export default CuerpoPag