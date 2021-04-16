<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <?php require_once 'app/config.php'; ?>  <!-- Permite ver que primero se tiene que construir todo lo de config -->
    <?php require_once 'app/dependencias.php'; ?>
</head>
<body>

    <?php 
        if (isset($_GET['vista_solicitada'])) {
            switch ($_GET['vista_solicitada']) {
                case 'form':{
                    require_once 'view/form.php';
                    break;
                }default:{
                    require_once 'view/default.php';
                }   break;
            }
        }else{
            require_once 'view/default.php';
        }
    ?>
</body>
</html>

    <!-- <?php require_once 'view/test.php'; ?>--> 
    <!-- <?php require_once 'view/uriel.php'; ?>