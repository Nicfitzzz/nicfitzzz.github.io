<?php
$name = sanitizeString($_POST["name"]);
$email = $_POST["email"];
$comments = sanitizeString($_POST["comments"]);
$headers = "From: me@neilsalazar.com";

$body = "You got something from the contact form at neilsalazar.com!

Name: $name.

Email: $email.

Comments: $comments.

";

if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	if(mail("me@neilsalazar.com", "NeilSalazar.com Contact Form Submission", $body, $headers)) {
		echo '<p>Thanks for the message!!! <br> Click "back" on your browser to return to neilsalazar.com, or just wait a few seconds.</p>';
	} else {
		echo '<p>There was a problem sending your message. Sorry.</p>';
	}
}

function sanitizeString($var) {
	if (get_magic_quotes_gpc()) $var = stripslashes($var);
	$var = strip_tags($var);
	$var = htmlentities($var);
	return $var;
}

header('refresh: 5; url=http://www.neilsalazar.com')
?>