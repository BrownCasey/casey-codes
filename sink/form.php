<?php
session_start();

@$a = ($_POST['name']);
@$b = ($_POST['email']);
@$_SESSION['name'] = $a;
@$_SESSION['email'] = $b;
?>
