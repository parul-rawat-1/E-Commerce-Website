// contact.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("contact-form");

    // Add submit event listener
    form.addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Process form data (you can send it to a server using AJAX, fetch, etc.)
        // For demonstration purposes, we'll just log the form data to the console
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // Optionally, you can display a success message or redirect the user after form submission
        // For example:
        alert("Your message has been sent successfully!");
        // window.location.href = "thank-you.html"; // Redirect to a thank you page
        form.reset();
    });
});
