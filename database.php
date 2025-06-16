<?php
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "section";
$conn = "";

$conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);

try {
  if ($conn) {
    // echo "Connection safe.";
    echo "";
  } else {
    echo "GGS GGS";
  }
} catch (error) {
  echo "ERROR: " . $error;
}
