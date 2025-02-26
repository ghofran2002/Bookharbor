document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.querySelector('.subscribe-btn');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function () {
            const emailInput = document.querySelector('.newsletter-form input');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing to BOOKHARBOR with email: ${emailInput.value}`);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});