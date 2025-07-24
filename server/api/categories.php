<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");

$result = $conn->query("SELECT * FROM categories");
$categories = [];

while ($row = $result->fetch_assoc()) {
  $categories[] = $row;
}
echo json_encode($categories);
?>
