document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can replace these with your actual authentication logic.
    if (username === "yourusername" && password === "yourpassword") {
        document.getElementById("message").innerHTML = "Login successful!";
    } else {
        document.getElementById("message").innerHTML = "Invalid username or password. Please try again.";
    }
});
