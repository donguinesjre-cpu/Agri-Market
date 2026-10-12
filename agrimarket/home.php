<?php

    $username = $_POST['username'];
    $password = $_POST['password'];


    $conn = new mysqli('localhost', 'root', '', 'dbagrimarket');
    if($conn-> connect_error){
        die('Connection Failed : ' . $conn->connect_error);
    }else{
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $username, $password,);
        $stmt->execute();
       
        $result = $stmt->get_result();

        if($result->num_rows > 0){
            header("Location: Order.html");
            exit();
        }else{
            echo "<script>
                    alert('Login Unsuccessful! (Invalid Username or Password)');
                    window.location.href = 'Home.html';
                    </script>";
            exit();
        }

        $stmt->close();
        $conn->close();
    }


?>