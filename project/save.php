<?php

$server  = "localhost";
$username ="root";
$password = "";
$dbname ="user";

$con = mysqli_connect($server , $username , $password , $dbname);
if (!$con) {
    echo "not connected".$mysqli_connect_error();
} else {
    // echo "connected"; 
}
?>