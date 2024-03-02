<?php 
include_once 'baza.php';
$id = $_POST["id"];
$sql = "DELETE FROM strani WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
if ($stmt->execute()) {
    // Return JSON message that it was ok
    $message = "Stran uspešno izbrisana!";
    echo json_encode(array("message" => $message));
    echo json_encode(array("id" => $id));
} else {
    // Return DB error message
    $message = "Napaka pri brisanju strani: " . $stmt->error;
    echo json_encode(array("error" => $message));
}