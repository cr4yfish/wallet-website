<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $mysql = new PDO("mysql:host=$servername;port=8111;dbname=wallet_website", $username, $password);
  // set the PDO error mode to exception
  $mysql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>