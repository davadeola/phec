<?php session_start();
if(isset($_POST['Submit'])) {   if( $_SESSION['chapcha_code'] == $_POST['chapcha_code'] && !empty($_SESSION['chapcha_code'] ) ) {
$youremail = 'davadeola@students.uonbi.ac.ke';
$fromsubject = '';
$title = $_POST['title'];
$fname = $_POST['fname'];
$mail = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['message'];
	$to = $youremail;
	$mailsubject = 'Masage recived from'.$fromsubject.' Contact Page';
	$body = $fromsubject.'

	The person that contacted you is  '.$fname.'
	 E-mail: '.$mail.'
	 Subject: '.$subject.'

	 Message:
	 '.$message.'

	|---------END MESSAGE----------|';

								mail($to, $subject, $body);
		unset($_SESSION['chapcha_code']);
   } else {
		echo 'Sorry, you have provided an invalid security code';
   }
 } else {
echo "You must write a message.;
}
?>
