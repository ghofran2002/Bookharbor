document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const popupModal = document.getElementById('popupModal');
    const closePopup = document.getElementById('closePopup');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            popupModal.style.display = 'flex';
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    closePopup.addEventListener('click', function () {
        popupModal.style.display = 'none';
    });
});