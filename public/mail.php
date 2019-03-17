<?php
$to = "astar2009@hanmail.net";
$subject = $_POST["subjectInput"];
$txt = $_POST["contentInput"];
$headers = "From: " . $_POST["emailInput"];

if(mail($to,$subject,$txt,$headers)) {
    echo "email sent successfully.";
} else {
    echo "sending email failed.";
}
?>