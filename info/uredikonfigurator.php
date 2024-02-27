<?php
// Include the database connection file
require_once 'baza.php';
session_start();

// Check if the request is made using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Get post data
        $konfigurator_id = $_POST['konfigurator_id'];
        $konfigurator_naziv = $_POST['ime'];
        $velikostArray = $_POST['velikost'];
        $velikostCenaArray = $_POST['velikost_cena']; // Add price data
        $velikostIdArray = $_POST['velikost_id'];
        $rezkarArray = $_POST['rezkar'];
        $rezkarCenaArray = $_POST['rezkar_cena']; // Add price data
        $rezkarIdArray = $_POST['rezkar_id'];
        $laserArray = $_POST['laser'];
        $laserCenaArray = $_POST['laser_cena']; // Add price data
        $laserIdArray = $_POST['laser_id'];
        $dodatekArray = $_POST['dodatek'];
        $dodatekCenaArray = $_POST['dodatek_cena']; // Add price data
        $dodatekIdArray = $_POST['dodatek_id'];

        // Update Konfigurator table
        $updateKonfiguratorQuery = "UPDATE konfigurator SET ime = '$konfigurator_naziv' WHERE id = $konfigurator_id";
        if (!mysqli_query($conn, $updateKonfiguratorQuery)) {
            throw new Exception("Error updating Konfigurator: " . mysqli_error($conn));
        }

        // Update Velikost table
        foreach ($velikostArray as $index => $velikost) {
            $velikost_id = $velikostIdArray[$index];
            $velikost_cena = $velikostCenaArray[$index]; // Get corresponding price
            $updateVelikostQuery = "UPDATE velikost SET velikost = '$velikost', cena = $velikost_cena WHERE id = $velikost_id";
            if (!mysqli_query($conn, $updateVelikostQuery)) {
                throw new Exception("Error updating Velikost: " . mysqli_error($conn));
            }
        }

        // Update Rezkarji table
        foreach ($rezkarArray as $index => $rezkar) {
            $rezkar_id = $rezkarIdArray[$index];
            $rezkar_cena = $rezkarCenaArray[$index]; // Get corresponding price
            $updateRezkarQuery = "UPDATE rezkarji SET ime = '$rezkar', cena = $rezkar_cena WHERE id = $rezkar_id";
            if (!mysqli_query($conn, $updateRezkarQuery)) {
                throw new Exception("Error updating Rezkarji: " . mysqli_error($conn));
            }
        }

        // Update Laserji table
        foreach ($laserArray as $index => $laser) {
            $laser_id = $laserIdArray[$index];
            $laser_cena = $laserCenaArray[$index]; // Get corresponding price
            $updateLaserQuery = "UPDATE laserji SET ime = '$laser', cena = $laser_cena WHERE id = $laser_id";
            if (!mysqli_query($conn, $updateLaserQuery)) {
                throw new Exception("Error updating Laserji: " . mysqli_error($conn));
            }
        }

        // Update Dodatki table
        foreach ($dodatekArray as $index => $dodatek) {
            $dodatek_id = $dodatekIdArray[$index];
            $dodatek_cena = $dodatekCenaArray[$index]; // Get corresponding price
            $updateDodatekQuery = "UPDATE dodatki SET ime = '$dodatek', cena = $dodatek_cena WHERE id = $dodatek_id";
            if (!mysqli_query($conn, $updateDodatekQuery)) {
                throw new Exception("Error updating Dodatki: " . mysqli_error($conn));
            }
        }

        // If no errors occurred, you can commit the changes
        mysqli_commit($conn);
        echo "Data successfully updated.";
        header("Location: ../vozek.php");
    } catch (Exception $e) {
        // If an error occurred, rollback the transaction and display the error message
        mysqli_rollback($conn);
        echo "Error: " . $e->getMessage();
        header("Location: ../vozek.php");
    }
}
?>
