<div class="container" id = "izdelkiContainer" style = "display: none; text-align: center;">
    <h2>Izdelki</h2>
    <p style = "text-align: center;">Preglej in urejaj izdelke</p>
    <button id="dodajIzdelekButton" class = "blue-button" style="margin: auto;">Dodaj izdelke</button>
    <br>
    <br>
<?php
require_once 'baza.php';

$sql = "SELECT * FROM konfigurator";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "<table style = 'text-align: center'>";
    echo "<tr>";
    echo "<th>Ime</th>";
    echo "<th>Uredi polja</th>";
    echo "<th>Dodaj polja</th>";
    echo "<th>Izbriši polja</th>";
    echo "<th>Izbriši izdelek</th>";
    echo "</tr>";
    while ($konfigurator = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $konfigurator["ime"] . "</td>";
        //edit button with all attributes (lasers, cutters, sizes, etc.)
        $sql = "SELECT * FROM velikost WHERE konfigurator_id = " . $konfigurator["id"];
        $result2 = $conn->query($sql);
        $velikosti = array();
        while ($velikost = $result2->fetch_assoc()) {
            array_push($velikosti, $velikost);
        }
        $sql = "SELECT * FROM rezkarji WHERE konfigurator_id = " . $konfigurator["id"];
        $result2 = $conn->query($sql);
        $rezkarji = array();
        while ($rezkar = $result2->fetch_assoc()) {
            array_push($rezkarji, $rezkar);
        }
        $sql = "SELECT * FROM laserji WHERE konfigurator_id = " . $konfigurator["id"];
        $result2 = $conn->query($sql);
        $laserji = array();
        while ($laser = $result2->fetch_assoc()) {
            array_push($laserji, $laser);
        }
        $sql = "SELECT * FROM dodatki WHERE konfigurator_id = " . $konfigurator["id"];
        $result2 = $conn->query($sql);
        $dodatki = array();
        while ($dodatek = $result2->fetch_assoc()) {
            array_push($dodatki, $dodatek);
        }
        echo "<td><button class='edit-konfigurator-btn gray-button' data-konfigurator-id='" . $konfigurator["id"] . "' data-konfigurator-ime='" . $konfigurator["ime"] . "' data-velikosti='" . json_encode($velikosti) . "' data-rezkarji='" . json_encode($rezkarji) . "' data-laserji='" . json_encode($laserji) . "' data-dodatki='" . json_encode($dodatki) . "'>Uredi</button></td>";
        echo "<td><button class='add-konfigurator-fields-btn gray-button' data-konfigurator-id='" . $konfigurator["id"] . "'>Dodaj polja</button></td>";
        echo "<td><button class='delete-konfigurator-fields-btn red-button' data-konfigurator-id='" . $konfigurator["id"] . "' data-konfigurator-ime='" . $konfigurator["ime"] . "' data-velikosti='" . json_encode($velikosti) . "' data-rezkarji='" . json_encode($rezkarji) . "' data-laserji='" . json_encode($laserji) . "' data-dodatki='" . json_encode($dodatki) . "'>Izbriši polja</button></td>";
        echo "<td><button class='delete-konfigurator-btn red-button' data-konfigurator-id='" . $konfigurator["id"] . "'>Izbriši</button></td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Ni izdelkov?";
}
?>
</div>

<div class="container" id="novIzdelekContainer" style="display: none;">
    <h2>Dodaj izdelek</h2>
    <div class="modern-form">
        <form id="konfiguratorForm" action="info/dodajkonfigurator.php" method="POST">
            <label>Ime</label>
            <input type="text" id="ime" name="ime" required><br><br>
            <button id="addFieldsBtn" type = "button">Dodaj več velikosti</button>
            <button id="addRezkarBtn" type = "button">Dodaj več rezkarjev</button>
            <button id="addLaserBtn" type = "button">Dodaj več laserjev</button>
            <button id="addDodatekBtn" type = "button">Dodaj več dodatkov</button>
            <br><br>

            <h3>Dodaj velikosti</h3>
            <div id="velikostFields">
                <div class="velikost">
                    <label>Velikost</label>
                    <input type="text" name="velikost[]" required><br>
                    <label>Cena</label>
                    <input type="number" name="velikost_cena[]" required><br><br>
                </div>
            </div>

            <h3>Dodaj rezkarje</h3>
            <div id="rezkarjiContainer">
                <div class="rezkar">
                    <label>Rezkar</label>
                    <input type="text" name="rezkar[]" required><br>
                    <label>Cena</label>
                    <input type="number" name="rezkar_cena[]" required><br><br>
                </div>
            </div>

            <h3>Dodaj laserje</h3>
            <div id="laserjiContainer">
                <div class="laser">
                    <label>Laser</label>
                    <input type="text" name="laser[]" required><br>
                    <label>Cena</label>
                    <input type="number" name="laser_cena[]" required><br><br>
                </div>
            </div>

            <h3>Dodaj dodatke</h3>
            <div id="dodatkiContainer">
                <div class="dodatek">
                    <label>Dodatek</label>
                    <input type="text" name="dodatek[]" required><br>
                    <label>Cena</label>
                    <input type="number" name="dodatek_cena[]" required><br><br>
                </div>
            </div>

            <button type="submit" class = "blue-button">Dodaj</button>
            <button type="button" class="close-konfigurator-btn red-button" id="nazajIzdelekButton">Zapri</button>
        </form>
    </div>
</div>

