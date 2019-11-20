<?php 

require '../backend/db/db-connect.php';

$email = $_POST['email'];

$sql = "INSERT INTO email_subscriber (email)
VALUES ('".$email."')";

if ($conn->query($sql) === TRUE) {
    echo "Thanks for your subscription!";
} else {
    echo "Error: " . $conn->error;
}

?>