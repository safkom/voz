<?php
//delete order
require_once 'baza.php';
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $order_id = $_POST['order_id'];
    $sql = "DELETE FROM narocila WHERE id = " . $order_id;
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true, 'message' => 'Naročilo uspešno izbrisano!'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Napaka pri brisanju naročila: ' . $conn->error));
    }
    $conn->close();
}

?>