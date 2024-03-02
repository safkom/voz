<div class="container" id = "uporabnikiContainer" style = "display: none; text-align: center;">
    <h2>Uporabniki</h2>
    <p style = "text-align: center;">Preglej in urejaj uporabnike</p>
    <button id="add-user-btn" style="margin: auto;">Dodaj uporabnika</button>
    <br>
    <br>
<?php
// get all users from uporabniki table, and show them in a table
require_once 'baza.php';

$sql = "SELECT * FROM uporabniki";
$result = $conn->query($sql);
// if there are users in the table, show them in a table
if ($result->num_rows > 0) {
    echo "<table style = 'text-align: center'>";
    echo "<tr>";
    echo "<th>Ime in priimek</th>";
    echo "<th>Email</th>";
    echo "<th>Administrator</th>";
    echo "<th>Uredi</th>";
    echo "<th>Izbriši</th>";
    echo "</tr>";
    while ($user = $result->fetch_assoc()) {
        if($user["admin"] == 1){
            $admin = "Da";
        }
        else{
            $admin = "Ne";
        }
        echo "<tr>";
        echo "<td>" . $user["ime"] . " " . $user["priimek"] . "</td>";
        echo "<td>" . $user["mail"] . "</td>";
        echo "<td>" . $admin . "</td>";
        echo "<td><button class='edit-user-btn gray-button' data-user-id='" . $user["id"] . "' data-user-name = '".$user["ime"]."' data-user-surname = '".$user['priimek']."' data-user-mail = '".$user['mail']."'>Uredi</button></td>";
        //dont allow to delete the user if it's the logged in user
        if($user["id"] != $_SESSION["id"]){
            echo "<td><button class='delete-user-btn red-button' data-user-id='" . $user["id"] . "'>Izbriši</button></td>";
        }
        else{
            echo "<td>Ne moreš izbrisati sebe?</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Ni uporabnikov?";
}
?>
</div>
