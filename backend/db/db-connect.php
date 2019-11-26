<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "liana_demo";

try {
    $handler = new PDO('mysql:host='.$servername.';dbname='.$dbname, $username, $password);
    
    $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Couldn't connect to database");
}



?>