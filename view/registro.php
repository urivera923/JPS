<div class="container">
  <div class="row">
    <div class="col">
      <div class="display-4 text-center">
        Registros para nuevos aspirantes
      </div>
    </div>
  </div>
  <div class="row justify-content-around py-4">
    <div class="col-sm-5 mt-1">
      <div style="font-size:3rem;" class="lead">
        Datos personales
      </div>
      <hr>
      <form id="formulario_registro_a">
        <div class="form-group">
          <label for="registro_nombre" class="load">Nombre(s)</label>
          <input 
            type="text"
            class="form-control form-control-sm"
            id="registro_nombre"
            name="registro_nombre"
            pattern = "[A-Za-z]+[a-zA-ZÀ-ÿ\s]{1,40}$">
        </div>
        <div class="form-group">
          <label for="registro_paterno" class="load">Apellido áterno</label>
          <input 
            type="text"
            class="form-control form-control-sm"
            id="registro_paterno"
            name="registro_paterno"
            pattern = "[A-Za-z]+[a-zA-ZÀ-ÿ\s]{1,40}$">
        </div>
        <div class="form-group">
          <label for="registro_materno" class="load">Nombre(s)</label>
          <input 
            type="text"
            class="form-control form-control-sm"
            id="registro_materno"
            name="registro_materno"
            pattern = "[A-Za-z]+[a-zA-ZÀ-ÿ\s]{1,40}$">
        </div>
        <div class="form-group">
          <label for="registro_fecha_nacimiento" class="lead">Fecha de nacimiento</label>
          <input 
            type="date"
            class="form-control form-control-sm"
            id="registro_fecha_nacimiento"
            name="registro_fecha_nacimiento">
        </div>
        <div class="form-group">
          <label for="registro_telefono" class="lead">Telefono de contacto (Preferente Movil)</label>
          <input 
            type="number"
            class="form-control form-control-sm"
            id="registro_telefono"
            name="registro_telefono"
            pattern="[0-9]*$">
        </div>
        <div class="form-group">
          <label for="registro_carrera" class="lead">Carrera de tu elección</label>
          <select name="registro_carrera" id="registro_carrera" class="form-control form-control-sm">
            <option value="" class="lead">Seleccionar</option>
            <option value="ISC" class="lead">Ingeniería en Sistemas Computacionales</option>
            <option value="IGE" class="lead">Ingeniería en Gestión Empresarial</option>
            <option value="II" class="lead">Ingeiería Industrial</option>
          </select>
        </div>
      </form>
    </div>
    <div class="col-sm-5 mt-1">
      <div style="font-size:3rem;" class="lead">
        Datos para Iniciar Sesión
      </div> 
      <hr>
      <form id="formulario_registro_b">
        <div class="form-group">
          <label for="registro_email" class="lead">Mail personal</label>
          <input type="email"
          id="registro_email"
          name="registro_email"
          class="form-control form-control-sm"
          pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
        </div>
        <div class="form-group">
          <label for="registro_password" class="lead">Contraseña</label>
          <input type="password"
          id="registro_password"
          name="registro_password"
          class="form-control form-control-sm"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
        </div>
        <div class="form-group">
          <label for="registro_password_confirmacion" class="lead">Confirmar <strong>Password</strong></label>
          <input type="password"
          id="registro_password_confirmacion"
          name="registro_password_confirmacion"
          class="form-control form-control-sm">
        </div>
        <div class="form-group">
          <span class="btn btn-success btn-block" id="btn_registro_usuario">
            <span class="lead">Registrarse</span>
          </span>
        </div>
        <div class="form-group">
          <a class="btn btn-dark btn-block" href="form">
            <span class="lead">Cancelar</span>
          </a>
        </div>
      </form> 
    </div>
  </div>
</div>

<script src="manager/manager_registro.js"></script>