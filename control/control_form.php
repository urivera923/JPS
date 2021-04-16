<?php

  //print($_POST['nombre']); // print_r -> Imprime directamente en el documento
  //Print_r -> Imprime recursivamente

  require_once '../app/conexion.php';
  echo getcwd();

  $conexion = conexion(); // -> $conexion es de contexto global y es una referencia visual
 
  $nombre = $_POST['bandera_nombre'];
  $password = $_POST['bandera_contraseña'];

  $query_insert = "INSERT INTO persona(nombre, contraseña)values(?, ?)"; //-> No colocamos el id por que ya es auto incrementable

  $insert_preparado = $conexion->prepare($query_insert); //-> Blindaje de sehguirdad al ataques DNS

  // $types= 'ss';

  $insert_preparado->bind_param('ss', $nombre, $password); // Lee la variable y checa el tipo exacto de datos y tambie  chefca que no tenga simbolos extraños, tras su validacón , garantiza el tipo  de dato correcto para darsela a la bandaera a llenar (?)

  $resultado_insert = $insert_preparado->execute();

  if($resultado_insert){ //Toma las cosas por contexto
    echo 1;
  }else{
    echo 0;  //-> Proceso de evaluación pero aun no hemos cerrado la conexión al servidor
  }

  $conexion->close(); //Cerrranmos la conexión 

  // echo 1; //Sirve para avisdarle al cliente que el (1) va a ser el resultado 
  //Es el rebote de algo 


  // Como imprimir solo con echo
  // echo $_POST['bandera_nombre']; -> Esto es lo que se imprime del front al backend
  // echo $_POST['bandera_contraseña'];

?>