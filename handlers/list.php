<?php

$_POST = json_decode(file_get_contents('php://input'), true);

require_once '../db.php';

$con = new pdo_db();

$contacts = $con->getData("SELECT * FROM contacts");

echo json_encode($contacts);

?>