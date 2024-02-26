<div class="container" id = "narocilaContainer">
<div class="narocila" id = "narocila">
    <h2>Seznam naročil</h2>
    <?php
    // Prepare SQL statement to retrieve customer data from stranke table
    $sql_customer = "SELECT * FROM stranke";
    $result_customer = $conn->query($sql_customer);

    // Check if there are any customers
    if ($result_customer->num_rows > 0) {

        // Loop through each customer
        while ($customer = $result_customer->fetch_assoc()) {

            // Prepare SQL statement to retrieve orders data from narocila table
            $sql_orders = "SELECT * FROM narocila WHERE id = (SELECT narocilo_id FROM stranke WHERE id = " . $customer["id"] . ")";
            $result_orders = $conn->query($sql_orders);

            // Check if there are any orders for this customer
            if ($result_orders->num_rows > 0) {
                // Display orders in a table
                echo "<table>";
                echo "<tr>";
                echo "<th>Št. naročila</th>";
                echo "<th>Ime stroja</th>";
                echo "<th>Velikost</th>";
                echo "<th>Rezkar</th>";
                echo "<th>Laser</th>";
                echo "<th>Dodatki</th>";
                echo "<th>Opombe</th>";
                echo "<th>Podatki stranke</th>";
                echo "<th>Izbris naročila</th>";
                echo "</tr>";
                while ($order = $result_orders->fetch_assoc()) {
                    $velikost_id = $order["velikost_id"];
                    $rezkar_id = $order["rezkar_id"];
                    $laser_id = $order["laser_id"];
                    $opombe = $order["opombe"];

                    $sql_velikost = "SELECT * FROM velikost WHERE id = $velikost_id";
                    $result_velikost = $conn->query($sql_velikost);
                    $velikost = $result_velikost->fetch_assoc();
                    

                    $sql_rezkar = "SELECT * FROM rezkarji WHERE id = $rezkar_id";
                    $result_rezkar = $conn->query($sql_rezkar);
                    $rezkar = $result_rezkar->fetch_assoc();

                    $sql_laser = "SELECT * FROM laserji WHERE id = $laser_id";
                    $result_laser = $conn->query($sql_laser);
                    $laser = $result_laser->fetch_assoc();

                    $sql_dodatki = "SELECT * FROM narocila_dodatki WHERE narocilo_id = " . $order["id"];
                    $result_dodatki = $conn->query($sql_dodatki);
                    $dodatki_id = array();
                    while ($dodatek = $result_dodatki->fetch_assoc()) {
                        $dodatki_id[] = $dodatek["dodatek_id"];
                    }
                    //if dodatki_id is empty, set dodatki[] to Ni dodatkov
                    if(empty($dodatki_id)){
                        $dodatki = array("Ni dodatkov");
                    } else {
                        $dodatki = array();
                        foreach ($dodatki_id as $dodatek_id) {
                            $sql_dodatek = "SELECT * FROM dodatki WHERE id = $dodatek_id";
                            $result_dodatek = $conn->query($sql_dodatek);
                            $dodatek = $result_dodatek->fetch_assoc();
                            $dodatki[] = $dodatek["ime"];
                        }
                    }
                    $konfigurator_id = $order["konfigurator_id"];
                    $sql_konfigurator = "SELECT * FROM konfigurator WHERE id = $konfigurator_id";
                    $result_konfigurator = $conn->query($sql_konfigurator);
                    $konfigurator = $result_konfigurator->fetch_assoc();

                    if($opombe == ""){
                        $opombe = "Ni opomb.";
                    }


                    echo "<tr>";
                    echo "<td>" . $order["id"] . "</td>";
                    echo "<td>" . $konfigurator['ime']. "</td>";
                    echo "<td>" . $velikost["velikost"]. "</td>";
                    echo "<td>" . $rezkar["ime"] . "</td>";
                    echo "<td>". $laser["ime"] . "</td>";
                    echo "<td>" . implode(", ", $dodatki) . "</td>";
                    echo "<td>" . $opombe . "</td>";
                    echo "<td><button class='show-customer-btn' data-customer-id='" . $customer["id"] . "' data-customer-name = '". $customer["ime_priimek"] ."' data-customer-email = '". $customer['mail'] ."' data-customer-phone = '". $customer['telefon'] ."'>Pokaži podatke stranke</button></td>";
                    echo "<td><button class='delete-order-btn' data-order-id='" . $order["id"] . "'>Izbriši</button></td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "<p>Ta stranka nima naročil?</p>";
            }
        }
    } else {
        echo "<p>Trenutno ni še nobenih naročil.</p>";
    }

    // Close database connection
    $conn->close();
    ?>
    </div>
</div>