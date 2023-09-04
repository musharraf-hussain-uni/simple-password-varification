document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById('password');
    const charIconTick = document.getElementById('char-icon-tick');
    const numIconTick = document.getElementById('num-icon-tick');
    const lowerIconTick = document.getElementById('lower-icon-tick');
    const specialIconTick = document.getElementById('special-icon-tick');
    const upperIconTick = document.getElementById('upper-icon-tick');
    const charIconDot = document.getElementById('char-icon-dot');
    const numIconDot = document.getElementById('num-icon-dot');
    const lowerIconDot = document.getElementById('lower-icon-dot');
    const specialIconDot = document.getElementById('special-icon-dot');
    const upperIconDot = document.getElementById('upper-icon-dot');

    // Add an event listener to the password input to check the requirements on input change
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;

        // Define your password validation conditions here
        const hasMinLength = password.length >= 8;
        const hasNumber = /[0-9]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialSymbol = /[!@$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

        // Update the visibility of the tick icons and circle icons based on the conditions
        charIconTick.style.visibility = hasMinLength ? 'visible' : 'hidden';
        numIconTick.style.visibility = hasNumber ? 'visible' : 'hidden';
        lowerIconTick.style.visibility = hasLowercase ? 'visible' : 'hidden';
        specialIconTick.style.visibility = hasSpecialSymbol ? 'visible' : 'hidden';
        upperIconTick.style.visibility = hasUppercase ? 'visible' : 'hidden';

        // Hide the circle icons when the password is valid
        charIconDot.style.visibility = hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialSymbol ? 'hidden' : 'visible';
        numIconDot.style.visibility = hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialSymbol ? 'hidden' : 'visible';
        lowerIconDot.style.visibility = hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialSymbol ? 'hidden' : 'visible';
        specialIconDot.style.visibility = hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialSymbol ? 'hidden' : 'visible';
        upperIconDot.style.visibility = hasMinLength && hasNumber && hasLowercase && hasUppercase && hasSpecialSymbol ? 'hidden' : 'visible';
    });
});