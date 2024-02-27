<?php
//delete order
require_once 'baza.php';
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $field = $_POST['id'];
    $table = $_POST['className'];
    $sql = "DELETE FROM ".$table." WHERE id = " . $field;
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true, 'message' => 'Konfigurator uspešno izbrisan!'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Napaka pri brisanju konfiguratorja: ' . $conn->error));
    }
    $conn->close();
}
?>