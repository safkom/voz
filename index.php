<!DOCTYPE html>
<html lang="sl">
<!-- Zaka to gledaš? Mislm lah vidiš ka sm naredu, to je pa to. Hvala? -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Miha Šafranko">
    <meta name="author" content="Miha Šafranko">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/navbar.css">
    <link rel="stylesheet" type="text/css" href="css/cenik.css">
    <title>Voz</title>
</head>
<body onload="zacetek()">
<script src="js/prikaz.js"></script>
<script src="js/voz.js"></script>
<script src="js/cenik.js"></script>
<?php include_once 'info/content.php'; ?>
<?php include_once 'info/baza.php'; ?>

<div class="image-container" id = "zacetek" style = "background-image: url('img/1.jpg');">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>

<?php
$sql = "SELECT * FROM strani";
$result = $conn->query($sql);
$strani = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $strani[] = $row;
    }
}
$conn->close();
foreach($strani as $stran){
    echo $stran["stran-image"];
}

include_once 'strani/zacetek.php';

//echo the pages seperatly
foreach($strani as $stran){
    echo $stran["stran"];
}
?>
<div class ="price">
<?php include_once 'info/cenik.php'; ?>
</div>
<?php include_once 'info/footer.php'; ?>
</body>

</html>
<!-- Zaka to gledaš? Mislm lah vidiš ka sm naredu, to je pa to. Hvala? -->
