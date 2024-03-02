<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/navbar.css">
    <link rel="stylesheet" type="text/css" href="css/cenik.css">
</head>
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
    echo $stran["stran-image"];
}

$sql = "SELECT * FROM strani";
$result = $conn->query($sql);
$strani = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $strani[] = $row;
    }
}
$conn->close();
//echo the pages seperatly
foreach($strani as $stran){
    echo $stran["stran"];
}
?>