<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "bookstore");
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$result = $conn->query("SELECT * FROM users WHERE email = '$email'");
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
  echo json_encode(["success" => true, "user" => $user]);
} else {
  echo json_encode(["success" => false]);
}
?>
