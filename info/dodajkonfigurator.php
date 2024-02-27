<?php
// Include the database connection file
require_once 'baza.php';
session_start();

// Check if the request is made using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Check if the required POST data is set
    if (
        !empty($_POST['ime']) &&
        !empty($_POST['velikost']) &&
        !empty($_POST['velikost_cena']) &&
        !empty($_POST['rezkar']) &&
        !empty($_POST['rezkar_cena']) &&
        !empty($_POST['laser']) &&
        !empty($_POST['laser_cena']) &&
        !empty($_POST['dodatek']) &&
        !empty($_POST['dodatek_cena'])
    ) {
        // Retrieve the form data
        $ime = $_POST['ime'];
        $velikostArray = $_POST['velikost'];
        $velikostCenaArray = $_POST['velikost_cena'];
        $rezkarArray = $_POST['rezkar'];
        $rezkarCenaArray = $_POST['rezkar_cena'];
        $laserArray = $_POST['laser'];
        $laserCenaArray = $_POST['laser_cena'];
        $dodatekArray = $_POST['dodatek'];
        $dodatekCenaArray = $_POST['dodatek_cena'];

        // Start a transaction
        mysqli_begin_transaction($conn);

        try {
            // Insert the new konfigurator
            $sql = "INSERT INTO konfigurator (ime) VALUES (?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 's', $ime);
            mysqli_stmt_execute($stmt);
            $konfiguratorId = mysqli_insert_id($conn);

            // Insert velikost
            $sql = "INSERT INTO velikost (velikost, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $velikost, $cena, $konfiguratorId);
            foreach ($velikostArray as $key => $velikost) {
                $cena = $velikostCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }

            // Insert rezkarji
            $sql = "INSERT INTO rezkarji (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $rezkar, $cena, $konfiguratorId);
            foreach ($rezkarArray as $key => $rezkar) {
                $cena = $rezkarCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }

            // Insert laserji
            $sql = "INSERT INTO laserji (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $laser, $cena, $konfiguratorId);
            foreach ($laserArray as $key => $laser) {
                $cena = $laserCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }

            // Insert dodatki
            $sql = "INSERT INTO dodatki (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $dodatek, $cena, $konfiguratorId);
            foreach ($dodatekArray as $key => $dodatek) {
                $cena = $dodatekCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }

            // Commit the transaction
            mysqli_commit($conn);

            // Close the statement
            mysqli_stmt_close($stmt);

            // Redirect user to a success page
            $message = "Konfigurator uspešno dodan!";
            //set session message
            $_SESSION['message'] = $message;
            header("location: ../vozek.php");
            exit;
        } catch (Exception $e) {
            // Rollback the transaction on failure
            mysqli_rollback($conn);
            // Redirect user to an error page
            $message = "Napaka pri dodajanju konfiguratorja: " . $e->getMessage();
            $_SESSION['message'] = $message;
            header("location: ../vozek.php");
            exit;
        }
    } else {
        // Redirect user to an error page
        $message = "Napaka pri dodajanju konfiguratorja: manjkajoči podatki!";
        $_SESSION['message'] = $message;
        header("location: ../vozek.php");
        exit;
    }
}
?>
