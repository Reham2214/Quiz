<?php
$servername = "localhost";
    $username = "root";
    $password = "Re0501900605";
    $db_name = "quizApp";  
    $conn = mysqli_connect($servername, $username, $password, $db_name);
    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }
    echo " ";
    
    ?>