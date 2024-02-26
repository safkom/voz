<?php
//logout user
session_start();
session_unset();
session_destroy();
header("location: ../prijava.php");
exit;
?>