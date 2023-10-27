const passwordInput = document.getElementById("password");
const correoInput = document.getElementById("email");

// event listeners
const button = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const pwd = "123";
const user = "admin@admin.com"
form.addEventListener("submit", (e) => {
    e.preventDefault();
})
function login() {
    if (user === correoInput.value && pwd === passwordInput.value) {
        window.location.href = "./documentos.html";
    }
}