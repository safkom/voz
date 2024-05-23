<?php
    $servername = "localhost";
    $username = "vozsi33_stran";
    $password = "nekogesloksmsigamoguzmislit";
    $database = "vozsi33_stran";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Set character set to UTF-8
    $conn->set_charset("utf8");
?>