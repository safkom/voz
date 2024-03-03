<?php
    $servername = "safko.eu";
    $username = "safkoeu_voz";
    $password = "m1h42005";
    $database = "safkoeu_voz";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Set character set to UTF-8
    $conn->set_charset("utf8");
?>