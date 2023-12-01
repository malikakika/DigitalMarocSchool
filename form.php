<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $phoneNumber = $_POST["phoneNumber"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Envoyer l'e-mail (utilisez la fonction de votre choix pour envoyer l'e-mail)
    $to = "malikachoubri@gmail.com";
    $subject = "Nouveau message de contact de $fullName";
    $body = "Nom et prénom: $fullName\nTéléphone: $phoneNumber\nEmail: $email\nMessage:\n$message";

    mail($to, $subject, $body);

}
?>
