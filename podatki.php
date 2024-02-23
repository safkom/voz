<?php

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "voz";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get machine name from URL parameters
$machine = $_GET['machine']; // Assuming machine name is passed as a GET parameter

// Fetch data from 'rezkarji' table for the specific machine
$rezkarji_sql = "SELECT * FROM rezkarji WHERE konfigurator_id IN (SELECT id FROM konfigurator WHERE ime = '$machine')";
$rezkarji_result = $conn->query($rezkarji_sql);
$rezkarji_data = $rezkarji_result->fetch_all(MYSQLI_ASSOC);

// Fetch data from 'laserji' table for the specific machine
$laserji_sql = "SELECT * FROM laserji WHERE konfigurator_id IN (SELECT id FROM konfigurator WHERE ime = '$machine')";
$laserji_result = $conn->query($laserji_sql);
$laserji_data = $laserji_result->fetch_all(MYSQLI_ASSOC);

// Fetch data from 'dodatki' table for the specific machine
$dodatki_sql = "SELECT * FROM dodatki WHERE konfigurator_id IN (SELECT id FROM konfigurator WHERE ime = '$machine')";
$dodatki_result = $conn->query($dodatki_sql);
$dodatki_data = $dodatki_result->fetch_all(MYSQLI_ASSOC);

// Fetch data from 'velikost' table for the specific machine
$velikosti_sql = "SELECT * FROM velikost WHERE konfigurator_id IN (SELECT id FROM konfigurator WHERE ime = '$machine')";
$velikosti_result = $conn->query($velikosti_sql);
$velikosti_data = $velikosti_result->fetch_all(MYSQLI_ASSOC);

// Close connection
$conn->close();

// Combine all data into a single array
$data = [
    'rezkarji' => $rezkarji_data,
    'laserji' => $laserji_data,
    'dodatki' => $dodatki_data,
    'velikosti' => $velikosti_data
];

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);

?>
