
 <?php
 if (isset($_POST['fnameGetStarted']) && $_POST['fnameGetStarted'] && isset($_POST['phoneGetStarted']) && $_POST['phoneGetStarted']
  && isset($_POST['emailGetStarted']) && $_POST['emailGetStarted'] && isset($_POST['dateGetstarted']) && $_POST['dateGetstarted']
  && isset($_POST['timeGetstarted']) && $_POST['timeGetstarted']) {
    // do user authentication as per your requirements 
    // ... 
    // ... 
    // based on successful authentication 
    echo json_encode(array('success' => 1));
} else {
    echo json_encode(array('success' => 0));
}
 //get data from form  
 $getStartedname = $_POST['fnameGetStarted'];
 $getStartedphone = $_POST['phoneGetStarted'];
 $getStartedemail= $_POST['emailGetStarted'];
 $getStartedDate= $_POST['dateGetstarted'];
 $getStartedTime= $_POST['timeGetstarted'];
 $to = "info@nxtgeninnovators.org";
 $subject = "Get Started Mail From STEM Tutoring Website";
 $txt ="Name = ". $getStartedname . "\r\n  Email = " . $getStartedemail  . "\r\n Phone =" . $getStartedphone . "\r\n Date =" . $getStartedDate . "\r\n Time =" . $getStartedTime;
 $headers = "From: noreply@stemtutoring.co.uk";
 if($getStartedemail!=NULL){
     mail($to,$subject,$txt,$headers);
 }
 //redirect
 header("Location:index.html");
 ?>