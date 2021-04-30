<?php

  function conexion(){

    // Esto es un token de división
    // $conexion =  new mysqli('localhost', 'root', '', 'persona'); //-> mysqli tiene que ir escrito tal cual, de no ser así no va a funcionar 
    $conexion =  new mysqli('localhost', 'root', '', 'preregistro'); //-> mysqli tiene que ir escrito tal cual, de no ser así no va a funcionar 

    if($conexion->connect_errno){ //Se dedica a monitorear errores de conexión 

      echo 'Error en la conexión' .$conexion->connect_error; //-> .$conexion ".$" -> Esta es una concatenación en php / "->" esta es una invocación en php
  
    }
  
    $conexion->set_charset("utf8"); // Indicamos que vamos a utilizar un juego de caracteres especiales, nomenclatura especidica y debe de ir en minusculas
  
    return $conexion;
  };

?> 