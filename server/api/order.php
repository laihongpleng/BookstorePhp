<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");
$data = json_decode(file_get_contents("php://input"));

$userId = $data->userId;
$items = json_encode($data->items);
$total = $data->total;

$conn->query("INSERT INTO orders (user_id, items, total) VALUES ($userId, '$items', $total)");
echo json_encode(["success" => true]);
?>
