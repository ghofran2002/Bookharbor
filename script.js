// Vous pouvez ajouter des fonctionnalités JavaScript ici si nécessaire.
// Par exemple, pour gérer les interactions utilisateur ou les animations.

document.addEventListener('DOMContentLoaded', function () {
    // Exemple : Ajouter un écouteur d'événement pour le bouton "Subscribe Now"
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function () {
            const emailInput = document.querySelector('.newsletter-form input');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with email: ${emailInput.value}`);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});