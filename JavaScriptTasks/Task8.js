function validateForm() {
    let valid = true;

    // Getting form values
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("re-password").value;
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let checkbox = document.getElementById("declare").checked;

    // Regular expressions for validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\d{10}$/;

    // Function to display error messages
    function showError(id, condition) {
        document.getElementById(id).innerText = condition ? "POOR" : "";
        if (condition) valid = false;
    }

    // Validation checks
    showError("fname-error", firstName === "");
    showError("lname-error", lastName === "");
    showError("email-error", !emailPattern.test(email));
    showError("password-error", password.length < 6);
    showError("repassword-error", password !== rePassword);
    showError("age-error", age === "" || isNaN(age) || age < 1);
    showError("phone-error", !phonePattern.test(phone));
    showError("address-error", address === "");
    showError("state-error", state === "");
    showError("country-error", country === "Choose your country");

    // Ensure checkbox is checked
    if (!checkbox) {
        alert("Please agree to the declaration.");
        valid = false;
    }

    return valid;
}
