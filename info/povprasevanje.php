<?php
require_once 'baza.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prepare data from the form
    $ime = htmlspecialchars($_POST['ime']); // Sanitize input to prevent XSS
    $email = htmlspecialchars($_POST['email']); // Sanitize input to prevent XSS
    $telefon = htmlspecialchars($_POST['telefon']); // Sanitize input to prevent XSS
    $opombe = htmlspecialchars($_POST['opombe']); // Sanitize input to prevent XSS

    // Set default values for optional fields
    $rezkar_id = ($_POST['selectedDrillingId'] !== '0') ? intval($_POST['selectedDrillingId']) : null;
    $laser_id = ($_POST['selectedLaserId'] !== '0') ? intval($_POST['selectedLaserId']) : null;



    // Get selected options
    $velikost_id = intval($_POST['selectedSizeId']); // Convert to integer to prevent SQL injection
    $konfiguratorId = intval($_POST['konfigurator']); // Convert to integer to prevent SQL injection

    if($laser_id !== 0 && $rezkar_id !== 0){
        $sql_narocila = "INSERT INTO narocila (konfigurator_id, velikost_id, rezkar_id, laser_id, opombe) VALUES (?, ?, ?, ?, ?)";
        $stmt_narocila = $conn->prepare($sql_narocila);
        $stmt_narocila->bind_param("iiiss", $konfiguratorId, $velikost_id, $rezkar_id, $laser_id, $opombe); // Changed "iiiis" to "iiiss"
    }
    if($laser_id == 0 && $rezkar_id !== 0){
        $sql_narocila = "INSERT INTO narocila (konfigurator_id, velikost_id, rezkar_id, opombe) VALUES (?, ?, ?, ?)";
        $stmt_narocila = $conn->prepare($sql_narocila);
        $stmt_narocila->bind_param("iiis", $konfiguratorId, $velikost_id, $rezkar_id, $opombe); // Changed "iiiis" to "iiiss"
    }
    if($laser_id !== 0 && $rezkar_id == 0){
        $sql_narocila = "INSERT INTO narocila (konfigurator_id, velikost_id, laser_id, opombe) VALUES (?, ?, ?, ?)";
        $stmt_narocila = $conn->prepare($sql_narocila);
        $stmt_narocila->bind_param("iiss", $konfiguratorId, $velikost_id, $laser_id, $opombe); // Changed "iiiis" to "iiiss"
    }
    if($laser_id == 0 && $rezkar_id == 0){
        $sql_narocila = "INSERT INTO narocila (konfigurator_id, velikost_id, opombe) VALUES (?, ?, ?)";
        $stmt_narocila = $conn->prepare($sql_narocila);
        $stmt_narocila->bind_param("iis", $konfiguratorId, $velikost_id, $opombe); // Changed "iiiis" to "iiiss"
    }
    
    // Insert data into the narocila table
    if ($stmt_narocila->execute()) {
        $narocilo_id = $stmt_narocila->insert_id; // Get the ID of the last inserted record

        // Insert dodatki (if any) into the narocila_dodatki table
        if (!empty($_POST['selectedAddonsIds'])) {
            $selectedAddonsIds = $_POST['selectedAddonsIds'];
            foreach ($selectedAddonsIds as $dodatek_id) {
                $dodatek_id = intval($dodatek_id); // Convert to integer to prevent SQL injection
                $sql_dodatki = "INSERT INTO narocila_dodatki (dodatek_id, narocilo_id) VALUES (?, ?)";
                $stmt_dodatki = $conn->prepare($sql_dodatki);
                $stmt_dodatki->bind_param("ii", $dodatek_id, $narocilo_id);
                $stmt_dodatki->execute();
                $stmt_dodatki->close(); // Close statement inside the loop
            }
        }

        // Insert data into the stranke table
        $sql_stranke = "INSERT INTO stranke (ime_priimek, mail, narocilo_id, telefon) VALUES (?, ?, ?, ?)";
        $stmt_stranke = $conn->prepare($sql_stranke);
        $stmt_stranke->bind_param("ssis", $ime, $email, $narocilo_id, $telefon); // Changed "sis" to "sii"
        
        if ($stmt_stranke->execute()) {
            echo json_encode(array('success' => true, 'message' => 'Form data inserted successfully!'));
        } else {
            http_response_code(500); // Internal Server Error
            // echo also the sql used
            echo json_encode(array('success' => false, 'message' => 'Error inserting data into stranke table: ' . $sql_stranke));
        }

    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(array('success' => false, 'message' => 'Error inserting data into narocila table: ' . $sql_narocila));
    }

    // Close statements
    $stmt_narocila->close();
    $stmt_stranke->close();
}

// Close connection
$conn->close();
?>
