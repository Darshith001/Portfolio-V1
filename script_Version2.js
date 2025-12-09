// Functional Contact Form using Fetch (replace YOUR_ENDPOINT with your service URL)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById("nameInput").value,
            email: document.getElementById("emailInput").value,
            message: document.getElementById("messageInput").value
        };

        // Change to your endpoint (e.g., Formspree, EmailJS, or custom backend)
        const endpoint = "https://formspree.io/f/xanbnydv";

        // Show loading feedback
        form.querySelector("button").disabled = true;
        form.querySelector("button").textContent = "Sending...";

        fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent! Thank you for contacting me.");
                form.reset();
            } else {
                alert("There was an error sending your message. Please try again later.");
            }
        })
        .catch(() => {
            alert("Network error. Please check your connection and try again.");
        })
        .finally(() => {
            form.querySelector("button").disabled = false;
            form.querySelector("button").textContent = "Send Message";
        });
    });
});
