$(document).ready(function(){

  valida_confrimacion_password = () => {

    if ($('#registro_password').val() != $('#registro_password_confirmacion').val()) {

      swal('Error', 'Las contraseñas no coinciden,favor de verificar', 'warning')
      $('#registro_passsword_confirmacion').val("");
      return false;
    } else {
      
      registro_password = $('registro_password').val();
    }
  }
  
  valida_confirmacion_email = () => {
    if ($('#registro_mail').val() != $('#registro_mail_confirmacion').val()) {

      swal('Error', 'Emails no coinciden, favor de verificar', 'warning');

      $('#registro_mail_confirmacion').val("");
      return false;

    } else {

      registro_mail = $('#registro_mail').val();
      valida_confrimacion_password();
      
    }
  }

  valida_construccion_emaiL = () => {

    cadena = $('registro_email').val();
    if (/^\w+([\.-])/.test(cadena)) {

      valida_confirmacion_email();

    } else {
      
      swal('Error', 'Ingresa un email válido', 'warning');
    }
  }

  valida_seleccion_carrera = () =>{
    carrera = $('#registro_carrera').toUpperCase().val();
    if (carrera == 'SIS' || carrera == 'IND' || carrera == 'GES') {

      registro_carrera = carrera;
      valida_construccion_emaiL();
      
    }
  }

  valida_telefono = () => {
    // telefono = ('#registro_telefono').val();
    telefono = parseInt($('#registro_telefono').val());
    if (telefono < 0) {
      swal('Alerta en el telefono', 'No existen número negativos', 'warning');
      return false;
    } else {  
      telefono = telefono.toString();
      if (telefono.length > 10) {

        swal('Alerta en el número telefonico', 
             'No debes de tener más de 10 digitos\n' + 
             'Recuerda que en la zona metropolitana los números inician con 55 o 56\n' +
             'Ejemplo 5546372849',
             'warning');
        return false;
      } else if (telefono.length < 10) {
        swal('Alerta en el número telefonico', 
             'No debes de tener menos de 10 digitos\n' + 
             'Recuerda que en la zona metropolitana los números inician con 55 o 56\n' +
             'Ejemplo 5546372849',
             'warning');
        return false;
      } else {
        registro_telefono = $('#registro_telefono').val();
        valida_seleccion_carrera();  
      }
    }
  }
  
  // function valida_fecha_nacimiento() {
  valida_fecha_nacimiento = () => {
    if ($('#registro_fecha_nacimiento').val() != "") {
      // fecha_ingresada = $('#registro_fecha_nacimiento').val().split("-");
      // edad = 2021 - $('#registro_fecha_nacimiento').val().split("-")[0];
      // if (2021 - $('#registro_fecha_nacimiento').val().split("-")[0] < 18) {

        swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy joven', 'warning');
      //   return false;  
      // } else if (2021 - $('#registro_fecha_nacimiento').val().split("-")[0] > 99) {

        return (2021 - $('#registro_fecha_nacimiento').val().split("-")[0] < 18);
        
    } else {
        swal('Alerta en fecha de nacimiento', 'La fecha no es valida: Eres muy viejo', 'warning');
        registro_fecha_nacimiento = $('#registro_fecha_nacimiento').val();
        valida_telefono();
        return (2021 - $('#registro_fecha_nacimiento').val().split("-")[0] > 99)
    }
  } 
  
  // function valida_construccion_alfabetica(){
  valida_construccion_alfabetica = () => {
    cadena = $('#registro_nombre').val();
    // Son dos definiciones de expresiones regulares, cada simbolo tiene consideraxiones especificas
    regexp1 = /[^\w\s]/gi;
    regexp2 = /[^A-Z\s]/gi;
    resultado1 = cadena.match(regexp1);
    resultado2 = cadena.match(regexp2);
    if (resultado1 != null || resultado2 != null) {
      if (resultado1 == null) {
        resultado1 == "";
      }
      if (resultado2 == null) {
        resultado2 == "";
      }
      swal('Alerta en el nombre....', 'Los siguientes caracteres ni sin validos: \n\n' + resultado2 + resultado1, 'warming')
      return false;
    } else {
      registro_nombre = $('#registro_nombre').val();
      registro_nombre = registro_nombre.trim();
      registro_nombre = registro_nombre.toUpperCase();
      cadena = $('#registro_paterno').val();
      resultado1 = cadena.match(regexp1);
      resultado2 = cadena.match(regexp2);
      if (resultado1 != null || resultado2 != null) {
        if (resultado1 == null) {
          resultado1 == "";
        }
        if (resultado2 == null) {
          resultado2 == "";
        }
        swal('Alerta en el Apellido Paterno....', 'Los siguientes caracteres no son validos: \n\n' + resultado2 + resultado1, 'warming')
        return false;
      }else { 
        registro_paterno = $('#registro_paterno').val();
        registro_paterno = registro_nombre.trim();
        registro_paterno = registro_nombre.toUpperCase();

        cadena = $('#registro_materno').val();
        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);

        if (resultado1 != null || resultado2 != null) {
          if (resultado1 == null) {
            resultado1 == "";
          }
          if (resultado2 == null) {
            resultado2 == "";
          }
          swal('Alerta en el Apellido Materno....', 'Los siguientes caracteres no son validos: \n\n' + resultado2 + resultado1, 'warming')
          return false;
        } else {
          registro_materno = $('#registro_materno').val();
          registro_materno = registro_nombre.trim();
          registro_materno = registro_nombre.toUpperCase();

          valida_fecha_nacimiento();  
        }

      }

    }

  }

  // function valida_vacios() {
  valida_vacios = () => {
    if($('#registro_nombre').val() == ''){
      swal('Error', 'Ingresa tu "nombre" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else if($('#registro_paterno').val() == ''){
      swal('Error', 'Ingresa tu "apellido paterno" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else if($('#registro_materno').val() == ''){
      swal('Error', 'Ingresa tu "apellido materno" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else if($('#registro_fecha_nacimiento').val() == ''){
      swal('Error', 'Ingresa tu "fecha de nacimiento" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else if($('#registro_telefono').val() == ''){
      swal('Error', 'Ingresa tu "teléfono" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else if($('#registro_carrera').val() == ''){
      swal('Error', 'Selecciona una "Carrera" para continuar', 'warning');
      return false; //Tenemos que parar el flujo de información, por lo cual, usamos un return
    }else{
      // swal('Yeha', 'Los compos fueron ingresados exitosamente', 'success');
      valida_construccion_alfabetica();
    }
    
  }

  $('#btn_registro_usuario').click(function(){
    valida_vacios();
  })

});