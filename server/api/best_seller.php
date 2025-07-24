<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Connect to the database
$conn = new mysqli("localhost", "root", "", "bookstore");

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// Query best sellers
$sql = "SELECT * FROM books WHERE best_seller = 1";
$result = $conn->query($sql);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Query failed"]);
    exit;
}

$books = [];
while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}

$conn->close();

echo json_encode($books);

