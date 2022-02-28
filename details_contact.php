<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "dbprofile";

$conn = mysqli_connect($server_name,$username,$password,$database_name);

if (!$conn)
{
    die ("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['save']))
{
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql_query = "INSERT INTO contact_details (fullname, email, phone, message)
    VALUES ('$fullname','$email','$phone','$message')";
    
    if (mysqli_query($conn, $sql_query))
    {
        echo "New Details Entry inserted successfully !";
    }
    else 
    {
        echo "Error: " . $sql . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>