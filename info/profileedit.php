<?php
require_once 'baza.php';
// change profile info
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ime = $_POST['ime'];
    $priimek = $_POST['priimek'];
    $email = $_POST['email'];
    $geslo = $_POST['geslo'];
    $geslo2 = $_POST['geslo2'];
    $userId = $_POST['userId'];

    //dont change password if empty
    if (empty($geslo) || empty($geslo2)) {
        $sql = "UPDATE uporabniki SET ime = '$ime', priimek = '$priimek', mail = '$email' WHERE id = " . $userId;
        if ($conn->query($sql) === TRUE) {
            echo json_encode(array('success' => true, 'message' => 'Podatki uspešno posodobljeni!'));
            // return the variables also
            echo json_encode(array('ime' => $ime, 'priimek' => $priimek, 'email' => $email));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Napaka pri posodabljanju podatkov: ' . $conn->error));
        }
    } 
    else{
        $sql = "SELECT geslo FROM uporabniki WHERE id = " . $userId;
        $result = $conn->query($sql);
        $user = $result->fetch_assoc();
        $hashed_password = $user['geslo']; // Fetch hashed password from database

        if (!password_verify($geslo, $hashed_password)) { // Verify entered password with hashed password
            echo json_encode(array('success' => false, 'message' => 'Napačno geslo!'));
        } else{
            // use pasword_hash to hash the new password
            $new_hashed_password = password_hash($geslo2, PASSWORD_DEFAULT);
            $sql = "UPDATE uporabniki SET ime = '$ime', priimek = '$priimek', mail = '$email', geslo = '$new_hashed_password' WHERE id = " . $userId;
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
