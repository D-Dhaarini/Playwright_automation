document.addEventListener("DOMContentLoaded", () => {
    // Handle Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login successful!");
            window.location.href = "dashboard.html";
        });
    }

    // Handle Signup
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signup successful!");
            window.location.href = "index.html";
        });
    }

    // Handle Logout
    const logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            alert("You have been logged out.");
            window.location.href = "index.html";
        });
    }

    // Handle Create Policy
    const createPolicyForm = document.getElementById("createPolicyForm");
    const policiesTable = document.getElementById("policiesTable");

    if (createPolicyForm) {
        createPolicyForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get form values
            const policyName = document.getElementById("policyName").value;
            const policyDetails = document.getElementById("policyDetails").value;

            // Create a new row in the table
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${policyName}</td>
                <td>${policyDetails}</td>
            `;

            // Append the new row to the table
            policiesTable.appendChild(newRow);

            // Clear the form
            createPolicyForm.reset();

            alert("Policy created successfully!");
        });
    }
});