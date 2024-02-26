<?php
//delete order
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $order_id = $_POST['order_id'];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "voz";
    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode(array('success' => false, 'message' => 'Connection failed: ' . $conn->connect_error)));
    }
    $sql = "DELETE FROM narocila WHERE id = " . $order_id;
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true, 'message' => 'Naročilo uspešno izbrisano!'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Napaka pri brisanju naročila: ' . $conn->error));
    }
    $conn->close();
}

?>