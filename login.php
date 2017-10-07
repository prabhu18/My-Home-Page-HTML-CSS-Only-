<?php

if ( empty($_GET["username"]) or empty($_GET["password"]) )
{
header("location: login.html");
}

else
{

    $inputusername=$_GET["username"];
    $inputpassword=$_GET["password"];

    $servername = "127.0.0.1";
    $username = "root";
    $password = "root";
    $dbname = "PW5";
    $port=8889;

    $link = mysqli_connect($servername, $username, $password, $dbname, $port);


    if (!$link)
    {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT password FROM users where username= '".$inputusername."' ";
    $result = mysqli_query($link, $sql);



    if (mysqli_num_rows($result) > 0)
      {

              $row = mysqli_fetch_assoc($result);
              $dbpassword= $row["password"];

            if ($dbpassword == $inputpassword )
            {
              session_start();
              $_SESSION["username"] = $_GET["username"];
              header("location: welcome.php");

            }
            else
            {
              header("location: login.html");
            }

        }

    else
    {
      header("location: login.html");
    }
}

?>
