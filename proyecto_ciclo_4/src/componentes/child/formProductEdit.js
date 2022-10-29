import Productos from "../../assets/productos.json";

const FormProductoEditar = (prop) => {


    return (<div className="row">
        <div className="col-6 p-4">
            <img src={prop.imagen} className="img-fluid" alt="..." />
        </div>
        <div className="col-6">
            <form>
                <div className="row">
                    <label className="col-sm-2 col-form-label" >Nombre: </label>
                    <input className="form-control" value={prop.nombre} />
                </div>
                <div className="row">
                    <label className="col-sm-12 col-form-label">Descripcion: </label>
                    <textarea className="form-control">{prop.descrp}</textarea>
                </div>
                <div className="row">
                    <label className="col-sm-2 col-form-label" >Precio: </label>
                    <input className="form-control" value={prop.precio} />
                </div>
                <div className="row">
                    <label className="col-sm-2 col-form-label" >Stock: </label>
                    <input className="form-control" value={prop.cantidad} />
                </div>
                <div className="row">
                    <button type="button" className="btn btnEliminarProd">Guardar</button>
                </div>
                
            </form>
        </div>
    
</div>)
}

export default FormProductoEditar