document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.getElementById('learnMore');
    const contactForm = document.getElementById('contactForm');

    learnMoreButton.addEventListener('click', function() {
        alert('Thank you for your interest! More information will be available soon.');
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display an alert with the form data (for demo purposes)
        alert(`Thank you, ${name}! We have received your message:\n\n${message}\n\nWe will respond to your email at ${email} soon.`);

        // Reset the form
        contactForm.reset();
    });
});
