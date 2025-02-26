<?php
// edit.php

// Inclure le fichier de configuration
define('IN_SCRIPT', true);
require_once 'config.php';

// Vérifier si l'ID du livre est passé en paramètre
if (!isset($_GET['id'])) {
    die('Book ID is required');
}

$book_id = $_GET['id'];

// Récupérer les informations du livre à modifier
$stmt = $conn->prepare("SELECT * FROM books WHERE id = ?");
$stmt->bind_param("i", $book_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die('Book not found');
}

$book = $result->fetch_assoc();
$stmt->close();

// Traitement de la soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $title = $_POST['title'] ?? '';
    $author = $_POST['author'] ?? '';
    $isbn = $_POST['isbn'] ?? '';
    $publication_year = $_POST['publicationYear'] ?? '';
    $genre = $_POST['genre'] ?? '';
    $description = $_POST['description'] ?? '';
    $price = $_POST['price'] ?? '';
    $stock_quantity = $_POST['stockQuantity'] ?? '';

    // Valider les champs obligatoires
    if (empty($title) || empty($author) || empty($genre) || empty($description) || empty($price)) {
        die('All required fields must be filled');
    }

    // Mettre à jour le livre dans la base de données
    $stmt = $conn->prepare("UPDATE books SET title = ?, author = ?, isbn = ?, publication_year = ?, genre = ?, description = ?, price = ?, stock_quantity = ? WHERE id = ?");
    $stmt->bind_param("sssisssii", $title, $author, $isbn, $publication_year, $genre, $description, $price, $stock_quantity, $book_id);

    if ($stmt->execute()) {
        // Rediriger vers la page d'administration après la mise à jour
        $stmt->close();
        header('Location: admin.html');
        exit;
    } else {
        $stmt->close();
        die('Error updating book: ' . $stmt->error);
    }
}

$conn->close();
?>