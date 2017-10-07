
<?php
session_start();

if (isset($_SESSION["username"]) )
{
  echo "Hello, ".$_SESSION["username"]."!</br></br>";

  $servername = "127.0.0.1";
  $username = "root";
  $password = "root";
  $dbname = "pw6";
  $port=8889;

  $link = mysqli_connect($servername, $username, $password, $dbname, $port);

  if (!$link)
  {
      die("Connection failed: " . $conn->connect_error);
  }
  else
  {

      $sql = "SELECT avatar FROM users  a  where a.username= '".$_SESSION["username"]."' ";
      $result = mysqli_query($link, $sql);
      $row = mysqli_fetch_assoc($result);
      $image=$row["avatar"];


      echo '<img src="img/'.$image.'" height="90" width="90" />'."</br></br></br>";

      $sql = "SELECT booktitle FROM users  a join FavoriteBooks b on ( a.username=b.username)  where a.username= '".$_SESSION["username"]."' ";
      $result = mysqli_query($link, $sql);

      echo " Here you go, Your favorite books! "."</br>";

      if (mysqli_num_rows($result) > 0)
      {

          echo "<ul>";
          while($row = mysqli_fetch_assoc($result))
            {
                echo "<li>";
                echo $row["booktitle"]."</br>";
                echo "</li>";
            }
          echo "</ul>";

      }

      else
        {
        echo " Sorry, you have no favorite books";
        }

      }

    }
else
{
    header("location:login.html");
};

?>
