
function redirectByRole(role) {
    switch (role) {
        case 1:
            window.location.href = "dashboard.html";
            break;
        case 2:
            window.location.href = "registered-user.html";
            break;
        case 3:
            window.location.href = "moderator.html";
            break;
        default:
            window.location.href = "unauthorized.html";
    }
}

// Wait until the browser has finished building the page (all HTML elements exist).
// Without this, the script (loaded in <head> on login.html) could run before
// the #loginBtn element exists. "() => { ... }" is an arrow function: the code
// that runs once the page is ready.
document.addEventListener("DOMContentLoaded", () => {

    // Find the button with id="loginBtn" and run the function when it is clicked.
    // "?." (optional chaining) means: if the button doesn't exist on this page
    // (for example on dashboard.html), do nothing instead of throwing an error.
    document.getElementById("loginBtn")?.addEventListener("click", async () => {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("errorMsg");

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            // fetch does not reject on 4xx/5xx, so check explicitly
            if (!response.ok) throw new Error("Login failed");

            const data = await response.json();
            localStorage.setItem("token", data.token);

            // Decode token and redirect based on role
            try {
                const decoded = jwt_decode(data.token);
                redirectByRole(decoded.role);
            } catch (error) {
                console.error("Token decoding failed:", error);
                window.location.href = "unauthorized.html";
            }
        } catch (error) {
            errorMsg.textContent = "Invalid credentials";
            errorMsg.classList.remove("hidden");
        }
    });
    // End of Login button click event


});
