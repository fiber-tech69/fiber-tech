document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-status').textContent = "Merci pour votre message, " + name + " ! Nous vous répondrons sous peu.";
        document.getElementById('form-status').style.color = 'green';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-status').textContent = "Veuillez remplir tous les champs.";
        document.getElementById('form-status').style.color = 'red';
    }
});
// Effet d'animation sur les boutons au chargement
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add("animated");
        }, index * 200); // Effet décalé pour chaque bouton
    });
});
