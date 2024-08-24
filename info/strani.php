<div class="container" id = "straniContainer" style = "display: none">
<div class="strani" id = "strani">
    <h2>Seznam strani</h2>
    <p style = "text-align: center;">Preglej in urejaj strani</p>
    <button id="create-page-btn" class = "blue-button" style="margin: auto;">Dodaj stran</button>
    <br>
    <br>
    <?php
    // sql for strani table
    $sql_strani = "SELECT * FROM strani";
    $result_strani = $conn->query($sql_strani);
    //display all strani in table
    if ($result_strani->num_rows > 0) {
        echo "<table>";
        echo "<tr>";
        echo "<th>Ime strani</th>";
        echo "<th>Link</th>";
        echo "<th>Uredi</th>";
        echo "<th>Izbriši</th>";
        echo "</tr>";
        while ($stran = $result_strani->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $stran["naslov"] . "</td>";
            echo "<td><a href='https://voz.si?stran=" . str_replace(' ', '', strtolower($stran["naslov"])) . "'>" . $stran["naslov"] . "</a></td>";
            echo "<td><button class='gray-button' onclick='editStran(" . $stran["id"] . ")'>Uredi</button></td>";
            echo "<td><button class='red-button' onclick='deleteStran(" . $stran["id"] . ")'>Izbriši</button></td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<p>Trenutno še nimaš strani.</p>";
    }
    ?>
</div>
</div>

<div class = "container" id = "create-page-form" style = "display:none">
    <h2>Dodaj stran</h2>
    <p style = "text-align: center;">Dodaj novo stran</p>
    <form id="create-page-form" method="post">
        <div class="form-group">
            <label for="ime">Naslov strani:</label>
            <input type="text" class="form-control" id="naslov" name="naslov" required>
        </div>
        <div class="form-group">
            <label for="konfigurator">Konfigurator:</label>
            <?php
            $sql_konfigurator = "SELECT * FROM konfigurator";
            $result_konfigurator = $conn->query($sql_konfigurator);
            if ($result_konfigurator->num_rows > 0) {
                echo "<select class='form-control' id='konfigurator' name='konfigurator'>";
                echo "<option value='0'>Brez konfiguratorja</option>";
                while ($konfigurator = $result_konfigurator->fetch_assoc()) {
                    echo "<option value='" . $konfigurator["id"] . "'>" . $konfigurator["ime"] . "</option>";
                }
                echo "</select>";
            } else {
                echo "<p>Ni konfiguratorjev</p>";
            }
            ?>
        </div>
        <div class="form-page">
            <label for="opis">Stran:</label>
            <button type="button" class="btn btn-outline-dark" onclick="addText()">Dodaj odstavek</button>
            <button type="button" class="btn btn-outline-dark" onclick="addImage()">Dodaj sliko</button>
            <br>
            <h3>Slika za ozadje</h3>
            <input type="file" id="stranImg" name="stranImg" accept="image/*">
            <br>
            <div id = "stran">
            </div>
            <br>
            <div id = "predogled">
            </div>
    </form>
    <button type="button" class="blue-button" onclick="SavePage()">Shrani stran</button>
</div>
</div>

<div class = "container" id = "edit-page-form" style = "display:none">
    <h2>Uredi stran</h2>
    <p style = "text-align: center;">Stran za urejanje strani</p>
    <p id = "stranId" style = "display: none"></p>
    <form id="create-page-form" method="post">
        <div class="form-group">
            <label for="ime">Naslov strani:</label>
            <input type="text" class="form-control" id="stranNaslov" name="naslov" required>
        </div>
        <div class="form-group">
            <label for="konfigurator">Konfigurator:</label>
            <?php
            $sql_konfigurator = "SELECT * FROM konfigurator";
            $result_konfigurator = $conn->query($sql_konfigurator);
            if ($result_konfigurator->num_rows > 0) {
                echo "<select class='form-control' id='konfiguratorSelect' name='konfigurator'>";
                echo "<option value='0'>Brez konfiguratorja</option>";
                while ($konfigurator = $result_konfigurator->fetch_assoc()) {
                    echo "<option value='" . $konfigurator["id"] . "'>" . $konfigurator["ime"] . "</option>";
                }
                echo "</select>";
            } else {
                echo "<p>Ni konfiguratorjev</p>";
            }
            ?>
        </div>
        <div class="form-page">
            <br>
            <h3>HTML za stran</h3>
            <div id = "stran">
            </div>
            <br>
            <textarea id="pageHtml" name="pageHtml" rows="10" cols="150"></textarea>

            <br>
            <div id = "predogled">
            </div>
    </form>
    <button type="button" class="blue-button" onclick="SavePageEdit()">Shrani stran</button>
</div>
</div>

