// script.js - Hace que el menú se resalte al hacer clic

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        // Quita la clase "active" de todos los links
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        // Añade la clase "active" al link clickeado
        this.classList.add('active');
    });
});