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
// Start session
session_start();

// Check if user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    // Redirect to the login page
    header("location: prijava.php");
    exit;
}

// Include database connection
require_once 'info/baza.php';

// Check if the user exists in the database
$email = $_SESSION["email"];
$stmt = $conn->prepare("SELECT id FROM uporabniki WHERE mail = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    // If user doesn't exist, logout and redirect to login page
    session_destroy();
    header("location: prijava.php");
    exit;
}
?>

    <nav class="navbar">
    <div class="navbar-left">
    <a href="javascript:window.location.href=window.location.href" onclick="return false;" style = "text-decoration: none;">
        <h3 id="vozText" onmouseover="changeColor()" onmouseout="resetColor()" >Voz</h3></a>
    </div>
        <div class="navbar-center">
            <button class="btn btn-outline-light" id = "narocilaButton">Naročila</button>
            <button class="btn btn-outline-light" id = "izdelkiButton">Izdelki</button>
            <?php
            if($_SESSION["admin"] == 1){
                echo "<button class='btn btn-outline-light' id = 'straniButton'>Strani</button>";
            }
            // if the user is an admin, show the uporabniki button
            if($_SESSION["admin"] == 1){
                echo "<button class='btn btn-outline-light' id = 'uporabnikiButton'>Uporabniki</button>";
            }
            ?>
        </div>

        <div class="navbar-right-vozek">
            <button class="btn btn-outline-light" id = "profilButton">Profil</button>
            <button class="btn btn-outline-light" onclick="location.href = 'info/odjava.php';" >Odjava</button>
        </div>
    </nav>
    <br>

</div>

<?php echo "<h2>Živjo, " . htmlspecialchars($_SESSION["ime"]) . "!</h2>";?>

<?php include_once 'info/narocila.php'; ?>

<?php include_once 'info/izdelki.php'; ?>

<?php include_once 'info/profil.php'; ?>

<?php include_once 'info/strani.php'; ?>

<?php include_once 'info/uporabniki.php'; ?>

<div class="popup-container" id="popupContainer">
    <div class="popup-box">
    </div>
</div>
<?php $conn->close(); ?>
<?php include_once 'info/alert.php'; ?>
</body>
<script src="js/stranke.js" charset="utf-8"></script>
<script src="js/vozek.js" charset="utf-8"></script>
<script src="js/voz.js" charset="utf-8"></script>
<script src="js/izdelki.js" charset="utf-8"></script>
<script src="js/strani.js" charset="utf-8"></script>
<script>
    document.cookie = 'obvestilo=; expires=Thu, 01 Jan 1970 00:00:00 GMT;  Max-Age=0;';
    document.cookie = 'error=; expires=Thu, 01 Jan 1970 00:00:00 GMT;  Max-Age=0;';
    document.cookie = 'warning=; expires=Thu, 01 Jan 1970 00:00:00 GMT;  Max-Age=0;';
    document.cookie = 'good=; expires=Thu, 01 Jan 1970 00:00:00 GMT;  Max-Age=0;';
</script>
</html>
