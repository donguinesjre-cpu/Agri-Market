<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (empty($username) || empty($password)) {
    echo "<script>alert('Please fill in all fields!'); window.history.back();</script>";
    exit();
}

    $conn = new mysqli('localhost', 'root', '', 'dbagrimarket');
    
    if($conn-> connect_error){
        die('Connection Failed : ' . $conn->connection_error);
    }else{

    $checkStmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $checkStmt->bind_param("s", $username);
    $checkStmt->execute();
    $result = $checkStmt->get_result();

    if ($result->num_rows > 0) {
        echo "<script>alert('Username already exists! Please choose another.'); window.history.back();</script>";
        $checkStmt->close();
        $conn->close();
        exit();
    }
    
    $checkStmt->close();
        $stmt = $conn->prepare("INSERT INTO users (username, password) values(?, ?)");
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        header("Location: home.html");
        exit();
        $stmt->close();
        $conn->close();
    }


?>