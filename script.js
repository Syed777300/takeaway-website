// Form Validation for Contact Page
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        alert('Thank you for contacting us! We will get back to you soon!');
    } else {
        alert('Please fill out all fields.');
    }
});



 