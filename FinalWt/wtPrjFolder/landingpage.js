// Script for handling pet adoption actions
function adoptPet(petName) {
    alert(You have shown interest in adopting ${petName}. We will contact you soon!);
}

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(Thank you ${name}! Your message has been sent. We will respond to ${email} soon.);
});
function openAdoptForm(petName) {
    document.getElementById('pet-name').textContent = petName;
    document.getElementById('adopt-popup').style.display = 'flex';
}

// Close adoption form
function closeAdoptForm() {
    document.getElementById('adopt-popup').style.display = 'none';
}

// Form submission
document.getElementById('adopt-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Adoption details submitted successfully!');
    closeAdoptForm();
};