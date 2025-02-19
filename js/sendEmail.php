<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $postal = $_POST['postal'];
    $availability = $_POST['availability'];
    $project_time = $_POST['project_time'];
    $message = $_POST['message'];

    $to = "maqsoodanwar919@gmail.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "
        Name: $name\n
        Phone: $phone\n
        Email: $email\n
        Postal Code: $postal\n
        Availability: $availability\n
        Project Time: $project_time\n
        Message: $message\n
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Email sending failed']);
    }
}
?>
