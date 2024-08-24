<nav class="navbar">
    <div class="navbar-left">
        <a href="javascript:void(0);" onclick="return false;" style="text-decoration: none;">
            <h3 id="vozText" onmouseover="changeColor()" onmouseout="resetColor()">Voz</h3>
        </a>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-right">
        <button class="btn btn-outline-light" id="zacetekButton" onclick="zacetekStran()">Na začetek</button>
        <?php
        require_once 'info/baza.php';

        $sql = "SELECT * FROM strani";
        $result = $conn->query($sql);
        $strani = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $strani[] = $row;
            }
        }

        // Loop through the pages
        foreach ($strani as $stran) {
            $konfigurator_id = $stran["konfigurator_id"] ?? 0;

            // Output the buttons with corresponding titles and id is lowercased $stran["naslov"]
            echo "<button class='btn btn-outline-light' id='" . str_replace(' ', '', strtolower($stran["naslov"])) . "' onclick='ShowPage(\"" . str_replace(' ', '', strtolower($stran["naslov"])) . "\", $konfigurator_id); '>" . $stran["naslov"] . "</button>";
        }
        ?>
    </div>
</nav>

<div class="content-below-navbar">

</div>
