// Customizable Portfolio - JS for contact form (demo only)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thanks for reaching out! This demo form does not send emails. Please customize it for your own use.");
        form.reset();
    });
});