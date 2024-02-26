<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome</title>
<link rel="stylesheet" href="css/vozek.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <?php
    // Check if user is logged in
    session_start();
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
        header("location: prijava.php");
        exit;
    }

    // Establish connection to the database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "voz"; // Change this to your database name

    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        http_response_code(500); // Internal Server Error
        die(json_encode(array('success' => false, 'message' => 'Connection failed: ' . $conn->connect_error)));
    }
    ?>
    <nav class="navbar">
    <div class="navbar-left">
    <a href="javascript:window.location.href=window.location.href" onclick="return false;" style = "text-decoration: none;">
        <h3 id="vozText" onmouseover="changeColor()" onmouseout="resetColor()" onclick="location.href = 'index.php';">Voz</h3></a>
    </div>
        <div class="navbar-center">
            <button class="btn btn-outline-light" id = "narocilaButton">Naročila</button>
        </div>

        <div class="navbar-right">
            <button class="btn btn-outline-light" id = "profilButton">Profil</button>
            <button class="btn btn-outline-light" onclick="location.href = 'info/odjava.php';" >Odjava</button>
        </div>
    </nav>
    <br>

</div>

<?php echo "<h2>Živjo, " . htmlspecialchars($_SESSION["ime"]) . "!</h2>";?>

<?php include_once 'info/narocila.php'; ?>

<?php include_once 'info/profil.php'; ?>

<div class="popup-container" id="popupContainer">
    <div class="popup-box">
    </div>
</div>

</body>
<script src="js/stranke.js"></script>
<script src="js/vozek.js"></script>
<script src="js/voz.js"></script>
</html>
