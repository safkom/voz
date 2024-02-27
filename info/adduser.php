<?php
require_once 'baza.php';
// change profile info
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ime = $_POST['ime'];
    $priimek = $_POST['priimek'];
    $email = $_POST['email'];
    $geslo = $_POST['geslo'];
    $geslo2 = $_POST['geslo2'];
    $admin = $_POST['admin'];

    if($geslo == $geslo2){
        //hash the password
        $geslo = password_hash($geslo, PASSWORD_DEFAULT);
        $sql = "INSERT INTO uporabniki (ime, priimek, mail, geslo, admin) VALUES ('$ime', '$priimek', '$email', '$geslo', '$admin')";
        $result = $conn->query($sql);
        if ($result === TRUE) {
            echo json_encode(array('success' => true, 'message' => 'Uporabnik uspešno ustvarjen!'));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Napaka pri posodabljanju podatkov: ' . $conn->error));
        }
    }
    else{
        echo json_encode(array('success' => false, 'message' => 'Gesli se ne ujemata!'));
    }
}
$conn->close();
?>
