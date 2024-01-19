<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $phoneNumber = $_POST["phoneNumber"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Envoyer l'e-mail 
    $to = "malikachoubri@gmail.com , mahjoub.bayassine@gmail.com , hanane@digitalfrance.org";
    $subject = "Nouveau message de contact de $fullName";
    $body = "Nom et prénom: $fullName\nTéléphone: $phoneNumber\nEmail: $email\nMessage:\n$message";

    mail($to, $subject, $body);

}
?>