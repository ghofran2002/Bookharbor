<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

// Connexion à la base de données
$mysqli = new mysqli('localhost', 'root', '', 'bookharbor');

if ($mysqli->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

// Récupérer l'utilisateur par email
$stmt = $mysqli->prepare("SELECT id, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $hashedPassword);

if ($stmt->fetch() && password_verify($password, $hashedPassword)) {
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}

$stmt->close();
$mysqli->close();
?>