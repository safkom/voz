<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "voz";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// change profile info
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ime = $_POST['ime'];
    $priimek = $_POST['priimek'];
    $email = $_POST['email'];
    $geslo = $_POST['geslo'];
    $geslo2 = $_POST['geslo2'];
    $userId = $_POST['userId'];

    //dont change password if empty
    if (empty($geslo) && empty($geslo2)) {
        $sql = "UPDATE uporabniki SET ime = '$ime', priimek = '$priimek', mail = '$email' WHERE id = " . $userId;
        if ($conn->query($sql) === TRUE) {
            echo json_encode(array('success' => true, 'message' => 'Podatki uspešno posodobljeni!'));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Napaka pri posodabljanju podatkov: ' . $conn->error));
        }
    } 
    else{
        if ($geslo != $geslo2) {
            echo json_encode(array('success' => false, 'message' => 'Gesli se ne ujemata!'));
        } else {
            // use pasword_hash to hash the password
            $geslo = password_hash($geslo, PASSWORD_DEFAULT);
            $sql = "UPDATE uporabniki SET ime = '$ime', priimek = '$priimek', mail = '$email', geslo = '$geslo' WHERE id = " . $userId;
            if ($conn->query($sql) === TRUE) {
                echo json_encode(array('success' => true, 'message' => 'Podatki uspešno posodobljeni!'));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Napaka pri posodabljanju podatkov: ' . $conn->error));
            }
        }
    }   
    }
$conn->close();
?>