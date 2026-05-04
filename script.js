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
    setupPasswordToggle('togglePasswordLogin', 'loginPassword');

    // Connect Registration Page Inputs
    setupPasswordToggle('togglePasswordReg', 'regPassword');
    setupPasswordToggle('toggleConfirmPassword', 'confirm-password');
});

// REGISTER
const regForm = document.getElementById("registerForm");

if (regForm) {
  regForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
    username: document.getElementById("username").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value
    };


    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert(await res.text());
  });
}

// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    };

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      // ✅ Redirect after login
      window.location.href = "home.html";
    } else {
      alert(await res.text());
    }
  });
}
