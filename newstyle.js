ddocument.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation (could be more complex)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Message sent successfully!');
        // Reset form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
