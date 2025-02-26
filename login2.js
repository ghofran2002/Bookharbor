document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Hardcoded credentials for demonstration
    const validEmail = 'admin@admin';
    const validPassword = 'admin';

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if the entered credentials match the hardcoded values
        if (email === validEmail && password === validPassword) {
            // Redirect to the home page on successful login
            window.location.href = 'admin.html';
        } else {
            // Display error message for invalid credentials
            errorMessage.textContent = 'Invalid email or password. Please try again.';
        }
    });
});