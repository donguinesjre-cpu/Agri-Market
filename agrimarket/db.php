<?php
$servername = "localhost";
$username = "root"; 
$password = "";     
$dbname = "dborders";


$conn = new mysqli($servername, $username, $password, $dbname);

n
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
