import logopri from "../assets/img/logoDevelopers.svg";
import  "../assets/css/login.css"

function Login () {
    return (
      <section class="vh-100">
        <div class="container-fluid h-custom"> 
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src={logopri} class="img-fluid" alt="Sample image" />
            </div>

            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
              <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Correo electrónico" />
            <label class="form-label" for="form3Example3">Correo electrónico</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Contraseña" />
            <label class="form-label" for="form3Example4">Contraseña</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
          
              <button type="button" class="btn btn-primary btn-lg">Ingresar</button> 
            <p class="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? <a href="#!"
                class="link-danger">Registrar</a></p>
          </div>
          
              </form>
          </div></div>
        </div>

      
      </section>
    )
}
export default Login