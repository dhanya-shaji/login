<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');
$servername="localhost";
$username="root";
$password="";
$database="logindatabase";
$conn=mysqli_connect($servername,$username,$password,$database);
if (!$conn) {
    die("connection faild".mysqli_connect_error());
}
if($_GET['type']=="getuserById"){
    $username=$_GET['username'];
    $password=$_GET['password'];

$sql="SELECT * from login_table where username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);
$dbdata=array();

if (mysqli_num_rows($result)>0) {
    // output data of each row
    $row = mysqli_fetch_assoc($result);
    $userdata = array(
        'resultCode' => 1,
        'userData'=>$row,
    );
   
    echo json_encode($userdata);
}
 else {
    $data = array('resultCode' => 0, );
    echo json_encode($data);
}  
}
?>