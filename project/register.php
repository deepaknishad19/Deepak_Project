
<?php
include 'save.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $password = $_POST['password'];
    $email= $_POST['email'];
    $sql = $con->prepare("INSERT INTO uinfo (name, password , email ) VALUES (?,?,?)");
    $sql->bind_param("sss",$name, $password , $email);
    if(!empty($name) && !empty($password) && !empty($email)  ) {
    if ($sql->execute()) {
        header("Location:login.php");
        // echo "Data inserted"."<br>";
    } else {
        echo "Error". $sql->error;
    }
    $sql->close();
    $con->close();  
} 
}
?>
<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="st.css">
    </head>

    <body>
        <header>
            <!-- place navbar here -->
        </header>
        <main>
            <div
                class="container"
            >
               
               <div
                class="row justify-content-center align-items-center g-2"
               >
               <div>
               <h2 class="text-center">Registrstion form</h2>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                          <form action="" method = "post">

                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    id="name"
                                    placeholder=""
                                />
                                <label for="formId1">name</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                />
                                <label for="formId1">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder=""
                                />
                                <label for="formId1">Email</label>
                            </div>
                           

                            <button
                                type="submit"
                                class="btn btn-primary"
                                
                            >
                                Submit
                </button>
                   <p>Already have an account? <a href="login.php">login</a></p>

                            
                            
                            
                          </form>  
                        </div>
                    </div>
                    <div>
                    

                    </div>
                    
                </div>
                </div>
               </div>
               
            </div>
            
        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
     </body>
</html>
<center>
<?php

include 'save.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $Username = $_POST['name'];
    $Email=$_POST['email'];
    $Password = $_POST['password'];
    if(!empty($Username) && !empty($Email)  && !empty($Password)){
    $sql = $con->prepare("INSERT INTO uinfo(name , email , password ) VALUES(?,?,?)");
    $sql->bind_param("sss",$name,$email,$password);
    if ($sql->execute()) {
        header("Location:login.php");
        echo "Data inserted"."<br>";
    } else {
        echo "Error". $sql->error;
    }
    $sql->close();
    $con->close();
} 
}
?>
</center>
