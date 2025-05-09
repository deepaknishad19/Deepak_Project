<?php
include 'save.php';
if ($_SERVER['REQUEST_METHOD']=='POST'){
    $Username = $_POST['name'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $Password = $_POST['password'];



    $sql= $con-> prepare ("INSERT INTO info(name , email , phone , password ) VALUES(?,?,?,?)");
    $sql -> bind_param("ssis",$name,$email,$phone,$password);
    if ($sql->execute()) {
        echo "<br>";
        echo "data inserted";
    } else {
        echo "error" . $sql->error ;
    }
    $sql->close();
    $con->close();

}


?>