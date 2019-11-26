<?php 

require '../backend/db/db-connect.php';

$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

if ( !$email ) {
  die('Error: Failed to validate email');
}

try {
    $sql = "INSERT INTO email_subscriber (email) VALUES (:email)";

    $query = $handler->prepare($sql);

    $query->execute(array(
        'email' => $email
    ));
    echo 'Successfully  registered!';
} catch (PDOException $e) {
    // 23000 = duplicate entry
    if ($query->errorCode() === '23000') {
        die('Email already registered.'); // user friendly message
    }
    // other errors
    die('Error: '.$e->getMessage());
}

?>