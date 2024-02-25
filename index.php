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
<body>
<p id = "konfigurator" style = "display: none;"></p>
<?php include_once 'content.php'; ?>
<div class="image-container-zacetek hidden">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>
<div class="image-container-jermenski hidden">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>
<div class="image-container-profesional hidden">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>
<div class="image-container-standard hidden">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>
<div class="image-container-visoki hidden">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="fade-overlay"></div>
</div>

<?php include_once 'strani/zacetek.php'; ?>

<?php include_once 'strani/jermenski.php'; ?>

<?php include_once 'strani/profesional.php'; ?>

<?php include_once 'strani/standard.php'; ?>

<?php include_once 'strani/visoki.php'; ?>
<div class ="price">
<?php include_once 'cenik.php'; ?>
</div>
<?php include_once 'footer.php'; ?>
<script src="js/prikaz.js"></script>
<script src="js/voz.js"></script>
<script src="js/cenik.js"></script>
</body>

</html>
<!-- Zaka to gledaš? Mislm lah vidiš ka sm naredu, to je pa to. Hvala? -->
