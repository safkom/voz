<?php
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

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prepare data from the form
    $ime = $_POST['ime'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];
    $opombe = $_POST['opombe'];

    // Get selected options
    $velikost_id = $_POST['selectedSizeId'];
    $rezkar_id = $_POST['selectedDrillingId'];
    $laser_id = $_POST['selectedLaserId'];
    $konfigurator = $_POST['konfigurator'];

    $konfiguratorId_sql = "SELECT id FROM konfigurator WHERE ime = lower('$konfigurator')";
    $konfiguratorId_result = $conn->query($konfiguratorId_sql);
    $konfiguratorId = $konfiguratorId_result->fetch_assoc();
    $konfigurator = $konfiguratorId['id'];

    // Insert data into the narocila table
    $sql_narocila = "INSERT INTO narocila (konfigurator_id ,velikost_id, rezkar_id, laser_id, opombe) VALUES (?, ?, ?, ?, ?)";
    $stmt_narocila = $conn->prepare($sql_narocila);
    $stmt_narocila->bind_param("iiiis", $konfiguratorId , $velikost_id, $rezkar_id, $laser_id, $opombe);
    if ($stmt_narocila->execute()) {
        $narocilo_id = $stmt_narocila->insert_id; // Get the ID of the last inserted record

        // Insert dodatki (if any) into the narocila_dodatki table
        if (!empty($_POST['selectedAddonsIds'])) {
            $selectedAddonsIds = $_POST['selectedAddonsIds'];
            foreach ($selectedAddonsIds as $dodatek_id) {
                $sql_dodatki = "INSERT INTO narocila_dodatki (dodatek_id, narocilo_id) VALUES (?, ?)";
                $stmt_dodatki = $conn->prepare($sql_dodatki);
                $stmt_dodatki->bind_param("ii", $dodatek_id, $narocilo_id);
                $stmt_dodatki->execute();
            }
        }

        // Insert data into the stranke table
        $sql_stranke = "INSERT INTO stranke (ime_priimek, mail, narocilo_id, telefon) VALUES (?, ?, ?, ?)";
        $stmt_stranke = $conn->prepare($sql_stranke);
        $stmt_stranke->bind_param("ssis", $ime , $email, $narocilo_id, $telefon); // Change "sis" to "sii"
        
        if ($stmt_stranke->execute()) {
            echo json_encode(array('success' => true, 'message' => 'Form data inserted successfully!'));
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array('success' => false, 'message' => 'Error inserting data into stranke table: ' . $stmt_stranke->error));
        }

    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(array('success' => false, 'message' => 'Error inserting data into narocila table: ' . $stmt_narocila->error));
    }

    // Close statements
    $stmt_narocila->close();
    if (isset($stmt_dodatki)) {
        $stmt_dodatki->close();
    }
    $stmt_stranke->close();
}

// Close connection
$conn->close();
?>
