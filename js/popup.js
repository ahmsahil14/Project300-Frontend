// Get the elements
const studentPortalBtn = document.getElementById("student-portal-btn");
const popupModal = document.getElementById("student-portal-popup");
const closePopupBtn = document.getElementById("close-popup-btn");
const createAccountBtn = document.getElementById("create-account-btn");
const loginBtn = document.getElementById("login-btn");

// Open the popup when the "Student Portal" button is clicked
studentPortalBtn.addEventListener("click", () => {
    popupModal.style.display = "flex";
});

// Close the popup when the "X" button is clicked
closePopupBtn.addEventListener("click", () => {
    popupModal.style.display = "none";
});

// Redirect to Create Account page when "Create Account" button is clicked
createAccountBtn.addEventListener("click", () => {
    window.location.href = "./pages/register.html"; // Change to your Create Account page URL
});

// Redirect to Login page when "Login" button is clicked
loginBtn.addEventListener("click", () => {
    window.location.href = "./pages/login.html"; // Change to your Login page URL
});
