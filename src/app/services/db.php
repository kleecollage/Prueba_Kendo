<?php
$serverName = "localhost";
$connectionOptions = array(
    "Database" => "Proyecto_Kendo",
    "Uid" => "DESKTOP-3116KGF\Antonio santander",
    "PWD" => ""
);

// Conectar a la base de datos
$conn = sqlsrv_connect($serverName, $connectionOptions);
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}
?>
