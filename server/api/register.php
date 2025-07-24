<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_BCRYPT);

$conn->query("INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')");
echo json_encode(["success" => true]);
?>
