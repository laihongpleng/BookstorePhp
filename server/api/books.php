<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");
$categoryId = $_GET['cat'] ?? null;

$query = "SELECT * FROM books";
if ($categoryId) {
  $query .= " WHERE category_id = $categoryId";
}

$result = $conn->query($query);
$books = [];

while ($row = $result->fetch_assoc()) {
  $books[] = $row;
}
echo json_encode($books);
?>
