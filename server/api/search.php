<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");
$q = $_GET['q'] ?? '';

$stmt = $conn->prepare("SELECT * FROM books WHERE title LIKE ? OR author LIKE ?");
$search = "%$q%";
$stmt->bind_param("ss", $search, $search);
$stmt->execute();

$result = $stmt->get_result();
$books = [];

while ($row = $result->fetch_assoc()) {
  $books[] = $row;
}
echo json_encode($books);
?>
