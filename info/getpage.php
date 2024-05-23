<?php
include_once 'baza.php';

$id = $_POST["id"];

$sql = "SELECT * FROM strani WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $page = $result->fetch_assoc();
    echo json_encode($page);
} else {
    echo json_encode(array("error" => "Ni strani v bazi"));
}
?>
