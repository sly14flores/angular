<?php

$_POST = json_decode(file_get_contents('php://input'), true);

require_once '../db.php';

$con = new pdo_db("contacts");

unset($_POST['id']);
$con->insertData($_POST);

?>