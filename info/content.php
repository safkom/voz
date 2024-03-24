<nav class="navbar">
    <div class="navbar-left">
<a href="javascript:window.location.href=window.location.href" onclick="return false;" style = "text-decoration: none;">
    <h3 id="vozText" onmouseover="changeColor()" onmouseout="resetColor()">Voz</h3>
</a></div>
    <div class="navbar-center"></div>
    <div class="navbar-right">
        <button class="btn btn-outline-light" id="zacetekButton" onclick ='zacetek()'>Na začetek</button>
        <?php
        require_once 'info/baza.php';
        $sql = "SELECT * FROM strani";
        $result = $conn->query($sql);
        $strani = array();
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $strani[] = $row;
            }
        }
        //echo the pages seperatly
        foreach($strani as $stran){
            if($stran["konfigurator_id"] == NULL){
                $konfigurator_id = 0;
            }
            else{
                $konfigurator_id = $stran["konfigurator_id"];
            }
            echo "<button class='btn btn-outline-light' onclick='ShowPage(\"" . str_replace(' ', '', strtolower($stran["naslov"])) . "\", ".$konfigurator_id.")'>" . $stran["naslov"] . "</button>";

        }
        ?>
    </div>
</nav>
<div class = "content-below-navbar">

</div>