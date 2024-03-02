<?php
include_once 'baza.php';

$naslov = $_POST["naslov"];
$konfigurator = $_POST["konfigurator_id"];
$stran = $_POST["htmlCode"];
$slika_strani = $_POST["slikaStrani"]; // Update this to match the client-side key
if($konfigurator == 0){
    $konfigurator = NULL;
}

$sql = "INSERT INTO strani (naslov, konfigurator_id, stran, `stran-image`) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("siss", $naslov, $konfigurator, $stran, $slika_strani); // Update the binding accordingly

if ($stmt->execute()) {
    // Return JSON message that it was ok
    $message = "Stran uspešno dodana!";
    echo json_encode(array("message" => $message));
} else {
    // Return DB error message
    $message = "Napaka pri dodajanju strani: " . $stmt->error;
    echo json_encode(array("error" => $message));
}

$stmt->close();
$conn->close();
?>
