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

    require_once 'info/baza.php';
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
            // if the user is an admin, show the uporabniki button
            if($_SESSION["admin"] == 1){
                echo "<button class='btn btn-outline-light' id = 'uporabnikiButton'>Uporabniki</button>";
            }  
            ?>
        </div>

        <div class="navbar-right">
            <button class="btn btn-outline-light" id = "profilButton">Profil</button>
            <button class="btn btn-outline-light" onclick="location.href = 'info/odjava.php';" >Odjava</button>
        </div>
    </nav>
    <br>

</div>

<?php echo "<h2>Živjo, " . htmlspecialchars($_SESSION["ime"]) . "!</h2>";?>

<?php
if(isset($_SESSION["obvestilo"])){
    echo "<div class = 'obvestilo'>";
    echo "<p>" . $_SESSION["obvestilo"] . "</p>";
    echo "</div>";
    unset($_SESSION["obvestilo"]);
}
?>

<?php include_once 'info/narocila.php'; ?>

<?php include_once 'info/izdelki.php'; ?>

<?php include_once 'info/profil.php'; ?>

<?php include_once 'info/uporabniki.php'; ?>

<div class="popup-container" id="popupContainer">
    <div class="popup-box">
    </div>
</div>
<?php $conn->close(); ?>
</body>
<script src="js/stranke.js"></script>
<script src="js/vozek.js"></script>
<script src="js/voz.js"></script>
<script src="js/izdelki.js"></script>
</html>
