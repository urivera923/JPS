$(document).ready(function() {

  let nombre;
  let password;
  $('#btn_enviar').click(function() {
    // nombre = $('#nombre').val();//Obtine el valor que el usuario optiene en el input
    // alert(nombre);
    // password = $('#password').val();

    // recolector = "bandera_nombre=" + nombre + "&bandera_contraseña=" + password; //->Siempre con comillas dobles (by pass)

    $.ajax({

      type: 'POST',
      // data: recolector, // Solo nos preocupamos de que sea cadena
      data: {
        "bandera_nombre": $('#nombre').val(), 
        "bandera_contraseña": $('#password').val()
      }, // Solo nos preocupamos de que sea cadena
      url: './control/control_form.php',
      // success: function(resultado){ //Esto es una promesa
      success: resultado =>{ //Esto es una promesa

        resultado = resultado.trim();
        
        if (resultado == 0) {
          
          
          console.log(resultado);
          swal("Error al guardar los datos",{
            icon: "error"
          })

        } else {

          swal("Guardado con éxito", {
            icon: "success"
          });

          $('#nombre').val('');
          $('#password').val('');
        }
        
      }
    });
  });
});