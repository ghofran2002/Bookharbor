<?php
header('Content-Type: application/json');

// Inclure le fichier de configuration
define('IN_SCRIPT', true);
require_once 'config.php';

// Fetch all books
$sql = "SELECT * FROM books";
$result = $conn->query($sql);

if (!$result) {
    die(json_encode(['success' => false, 'message' => 'Error fetching books: ' . $conn->error]));
}

$books = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $books[] = $row;
    }
}

echo json_encode($books);

$conn->close();
?>