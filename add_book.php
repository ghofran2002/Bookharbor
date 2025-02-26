<?php
header('Content-Type: application/json');

// Inclure le fichier de configuration
define('IN_SCRIPT', true);
require_once 'config.php';

// Get form data
$title = $_POST['title'] ?? '';
$author = $_POST['author'] ?? '';
$isbn = $_POST['isbn'] ?? '';
$publication_year = $_POST['publicationYear'] ?? '';
$genre = $_POST['genre'] ?? '';
$description = $_POST['description'] ?? '';
$price = $_POST['price'] ?? '';
$stock_quantity = $_POST['stockQuantity'] ?? '';

// Validate required fields
if (empty($title) || empty($author) || empty($genre) || empty($description) || empty($price)) {
    echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
    exit;
}

// Insert data into the database using prepared statements
$stmt = $conn->prepare("INSERT INTO books (title, author, isbn, publication_year, genre, description, price, stock_quantity)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssisssi", $title, $author, $isbn, $publication_year, $genre, $description, $price, $stock_quantity);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>