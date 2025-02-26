<?php
// config.php

// Empêcher l'accès direct au fichier
if (!defined('IN_SCRIPT')) {
    die('Accès interdit');
}

// Informations de connexion à la base de données
define('DB_SERVER', 'localhost');    // Serveur MySQL
define('DB_USERNAME', 'root');       // Nom d'utilisateur MySQL
define('DB_PASSWORD', '');           // Mot de passe MySQL (vide par défaut pour EasyPHP)
define('DB_NAME', 'bookharbor');     // Nom de la base de données

// Établir la connexion à la base de données
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>