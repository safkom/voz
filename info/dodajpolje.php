<?php
// Include the database connection file
require_once 'baza.php';
session_start();

// Check if the request is made using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Retrieve the form data
        $konfiguratorId = $_POST['konfigurator_id'];
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
            // Insert velikost
            if(!empty($velikostArray)){
            $sql = "INSERT INTO velikost (velikost, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $velikost, $cena, $konfiguratorId);
            foreach ($velikostArray as $key => $velikost) {
                $cena = $velikostCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }
        }

            // Insert rezkarji
            if(!empty($rezkarArray)){
            $sql = "INSERT INTO rezkarji (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $rezkar, $cena, $konfiguratorId);
            foreach ($rezkarArray as $key => $rezkar) {
                $cena = $rezkarCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }
        }

            // Insert laserji
            if(!empty($laserArray)){
            $sql = "INSERT INTO laserji (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $laser, $cena, $konfiguratorId);
            foreach ($laserArray as $key => $laser) {
                $cena = $laserCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }
        }

            // Insert dodatki
            if(!empty($dodatekArray)){
            $sql = "INSERT INTO dodatki (ime, cena, konfigurator_id) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, 'sdi', $dodatek, $cena, $konfiguratorId);
            foreach ($dodatekArray as $key => $dodatek) {
                $cena = $dodatekCenaArray[$key];
                mysqli_stmt_execute($stmt);
            }
        }
            if(!empty($velikostArray) || !empty($rezkarArray) || !empty($laserArray) || !empty($dodatekArray)){
            // Commit the transaction
            mysqli_commit($conn);

            // Close the statement
            mysqli_stmt_close($stmt);
            // Redirect user to a success page
            $message = "Polja konfiguratorja uspešno dodana!";
            //set session message
            $_SESSION['message'] = $message;
            header("location: ../vozek.php");
            exit;
        }
        else{
            $message = "Napaka pri dodajanju polj konfiguratorja: Polja niso bila izpolnjena!";
            $_SESSION['message'] = $message;
            header("location: ../vozek.php");
            exit;
        }

            
        } catch (Exception $e) {
            // Rollback the transaction on failure
            mysqli_rollback($conn);
            // Redirect user to an error page
            $message = "Napaka pri dodajanju polj konfiguratorja: " . $e->getMessage();
            $_SESSION['message'] = $message;
            header("location: ../vozek.php");
            exit;
        }
    }
?>
