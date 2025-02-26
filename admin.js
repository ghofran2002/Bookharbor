document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('addBookForm');
    const bookTable = document.getElementById('bookTable').getElementsByTagName('tbody')[0];

    // Load books when the page loads
    loadBooks();

    // Add book form submission
    addBookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(addBookForm);

        fetch('add_book.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Book added successfully');
                    addBookForm.reset();
                    loadBooks(); // Reload the book list
                } else {
                    alert('Error adding book: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while adding the book.');
            });
    });

    // Function to load books
    function loadBooks() {
        fetch('list_books.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Clear the table before loading new data
                bookTable.innerHTML = '';
    
                // Check if data is an array and not empty
                if (Array.isArray(data) && data.length > 0) {
                    data.forEach(book => {
                        const row = bookTable.insertRow();
                        row.innerHTML = `
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.isbn}</td>
                            <td>${book.publication_year}</td>
                            <td>${book.genre}</td>
                            <td>$${book.price.toFixed(2)}</td>
                            <td>${book.stock_quantity}</td>
                            <td>
                                <button onclick="editBook(${book.id})">Edit</button>
                                <button onclick="deleteBook(${book.id})">Delete</button>
                            </td>
                        `;
                    });
                } else {
                    // If no books are found, display a message
                    const row = bookTable.insertRow();
                    row.innerHTML = `<td colspan="8" style="text-align: center;">No books found.</td>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while loading the book list. Please try again later.');
            });
    }

    // Function to delete a book
    window.deleteBook = function (id) {
        if (confirm('Are you sure you want to delete this book?')) {
            fetch(`delete_book.php?id=${id}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Book deleted successfully');
                        loadBooks(); // Reload the book list after deletion
                    } else {
                        alert('Error deleting book: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while deleting the book.');
                });
        }
    }

    // Function to edit a book
    window.editBook = function (id) {
        // Rediriger vers la page d'édition avec l'ID du livre
        window.location.href = `edit.php?id=${id}`;
    }
});