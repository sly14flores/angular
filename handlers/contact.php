<?php

$_POST = json_decode(file_get_contents('php://input'), true);

require_once '../db.php';

$con = new pdo_db("contacts");

if ($_POST['id'] == 0) {
	unset($_POST['id']);
	$con->insertData($_POST);
} else {
	$con->updateData($_POST,'id');	
}

?>