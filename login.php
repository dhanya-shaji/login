
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
if(!$conn)
{
    die("connection failed".mysqli_connect_error());
}

$sql="INSERT INTO login_table(id,username,password,email)VALUES
(1,'dhanya','123g','dha@gmail.com'),
(2,'gopu','345hj','gopu@gmail.com')";
$result=mysqli_query($conn,$sql);
if($result)
{
    echo"added successfully";
}
else{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>