 const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");
const toggleButton = document.getElementById("toggleButton");
const toggleText = document.getElementById("toggleText");
const toggleSubText = document.getElementById("toggleSubText");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

function toggleForm() {
    loginContainer.classList.toggle("hidden");
    registerContainer.classList.toggle("hidden");
    if (loginContainer.classList.contains("hidden")) {
        toggleText.textContent = "Welcome Back!";
        toggleSubText.textContent = "Already have an account?";
        toggleButton.textContent = "Login";
    } else {
        toggleText.textContent = "Hello, Welcome!";
        toggleSubText.textContent = "Don't have an account?";
        toggleButton.textContent = "Register";
    }
}

toggleButton.addEventListener("click", toggleForm);
showRegister.addEventListener("click", toggleForm);
showLogin.addEventListener("click", toggleForm);

function socialLogin(platform) {
    alert(`Logging in with ${platform}...`);
}

function togglePassword(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const passwordToggleIcon = document.querySelector(`#${passwordFieldId} + .password-toggle`);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggleIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordField.type = "password";
        passwordToggleIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}
