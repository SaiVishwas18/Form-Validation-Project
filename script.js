document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    // Full Name validation
    if (fullName.length < 5) {
        alert('Name must be at least 5 characters long.');
        isValid = false;
    }

    // Email validation
    if (!email.includes('@')) {
        alert('Enter a valid email with @ character.');
        isValid = false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone) || phone === '1234567890') {
        alert('Enter a valid 10-digit phone number (not 1234567890).');
        isValid = false;
    }

    // Password validation
    if (password.length < 8 || password === 'password' || password === fullName) {
        alert('Password must be at least 8 characters long and should not be "password" or your name.');
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        isValid = false;
    }

    // If all fields are valid, log a success message
    if (isValid) {
        alert('Form submitted successfully!');
        // Proceed with form submission or any other logic here
    }
});