<?php

require_once("db.php") ;

$name = $_POST["name"]

$query="INSERT INTO mi_tabla (campo1) VALUES ('$name')";
$res=sqlsrv_prepare($con,$query);

if (sqlsrv_execute($con,$res)){
	echo "Datos insertados";
} else{
	echo "Error al insertar";
}

// require_once 'db.php';

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $name = $_POST['name'];

//     $tsql = "INSERT INTO mi_tabla (campo1) VALUES ('$name')";
//     $stmt = sqlsrv_query($conn, $tsql);
//     if ($stmt === false) {
//         die(print_r(sqlsrv_errors(), true));
//     }

//     echo "Datos insertados correctamente";
// }

// sqlsrv_close($conn);
?>
