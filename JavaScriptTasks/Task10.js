document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const usersTable = document.getElementById("usersTableBody");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            if (!name || !email || !contact || !address) {
                alert("Please fill in all fields.");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });
            localStorage.setItem("users", JSON.stringify(users));

            registerForm.reset();
            alert("User registered successfully!");
        });
    }

    if (usersTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach((user, index) => {
            let row = usersTable.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.contact;
            row.insertCell(3).textContent = user.address;
        });
    }
});
