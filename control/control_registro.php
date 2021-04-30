<?php

  require_once '../app/conexion.php';

  $conexion = conexion();

  $datos_recibidos = array(

    $conexion->real_escape_string(htmlentities($_POST['registro_nombre'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_paterno'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_materno'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_fecha_nacimiento'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_telefono'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_carrera'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_email'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_password']))

  );

  $mail_temp = $dato_recibido(6);
  $pass_temp = $dato_recibido(7);


 

  function verifica_correo_existente($correo){
    $conexion = conexion();
    $query = 'SELECT *FROM usuario WHERE mail_usuario = ?';
    $query = $conexion->prepare($query);
  }

  


?>