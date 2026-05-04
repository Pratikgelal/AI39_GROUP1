document.addEventListener('DOMContentLoaded', function () {

    // Toggle hidden & visible text password
    function setupPasswordToggle(toggleId, inputId) {
        const toggleIcon = document.getElementById(toggleId);
        const passwordInput = document.getElementById(inputId);

        if (toggleIcon && passwordInput) {
            toggleIcon.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                // Toggle icon design classes
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        }
    }

    // Connect Login Page Input
    setupPasswordToggle('togglePasswordLogin', 'password');

    // Connect Registration Page Inputs
    setupPasswordToggle('togglePasswordReg', 'reg-password');
    setupPasswordToggle('toggleConfirmPassword', 'confirm-password');
});