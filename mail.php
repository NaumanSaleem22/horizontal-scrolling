<?php
//get data from form  
$name = $_POST['name'];
$phone = $_POST['phone'];
$email= $_POST['email'];
$coursetype= $_POST['coursetype'];
$message= $_POST['message'];
$to = "info@nxtgeninnovators.org";
$subject = "Mail From STEM Tutoring Website";
$txt ="Name = ". $name . "\r\n  Email = " . $email  . "\r\n Phone =" . $phone . "\r\n Message =" . $message . "\r\n CourseType =" . $coursetype;
$headers = "From: noreply@stemtutoring.co.uk";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");

 ?>
