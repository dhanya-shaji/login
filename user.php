<?php
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
    $sql="SELECT * from login_table where username='$username'";
$result = mysqli_query($conn, $sql);
$dbdata=array();

if (mysqli_num_rows($result)>0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $dbdata[]=$row;
    }
    echo json_encode($dbdata);

}
}
?>