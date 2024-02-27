<?php
//delete order
require_once 'baza.php';
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $konfigurator_id = $_POST['konfigurator_id'];
    $sql = "DELETE FROM konfigurator WHERE id = " . $konfigurator_id;
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true, 'message' => 'Konfigurator uspešno izbrisan!'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Napaka pri brisanju konfiguratorja: ' . $conn->error));
    }
    $conn->close();
}
?>