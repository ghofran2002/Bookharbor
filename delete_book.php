<?php
header('Content-Type: application/json');

// Inclure le fichier de configuration
define('IN_SCRIPT', true);
require_once 'config.php';

// Get the book ID to delete
$id = $_GET['id'] ?? null;

if (empty($id)) {
    echo json_encode(['success' => false, 'message' => 'Book ID is required']);
    exit;
}

// Delete the book using prepared statements
$stmt = $conn->prepare("DELETE FROM books WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error deleting book: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>