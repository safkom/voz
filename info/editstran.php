<?php
include_once 'baza.php';

$id = $_POST["id"]; // Assuming you're passing the ID of the page to be edited

$naslov = $_POST["naslov"];
$konfigurator = $_POST["konfigurator_id"];
$stran = $_POST["pageHtml"];

// Update the query to use UPDATE instead of INSERT
$sql = "UPDATE strani SET naslov=?, konfigurator_id=?, stran=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sisi", $naslov, $konfigurator, $stran, $id); // Update the binding accordingly

if ($stmt->execute()) {
    // Return JSON message that it was ok
    $message = "Stran uspešno posodobljena!";
    echo json_encode(array("message" => $message));
} else {
    // Return DB error message
    $message = "Napaka pri posodabljanju strani: " . $stmt->error;
    echo json_encode(array("error" => $message));
}

$stmt->close();
$conn->close();
?>
