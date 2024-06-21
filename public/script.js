// script.js
console.log("JavaScript cargado correctamente");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('/submit', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').innerHTML = data;
        document.getElementById('contactForm').classList.add('hidden');
        document.getElementById('thanksMessage').classList.remove('hidden');
        document.getElementById('thanksMessage').classList.add('fade-in');
    });
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('contactForm').classList.remove('hidden');
    document.getElementById('thanksMessage').classList.add('hidden');
});
