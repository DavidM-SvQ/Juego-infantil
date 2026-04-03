// progreso.js

// --- SONIDOS ---
const audioGanar = new Audio('/Recursos/Sonidos/ganar.mp3');
const audioClick = new Audio('/Recursos/Sonidos/click.mp3');

function sonarGanar() { audioGanar.play(); }
function sonarClick() { audioClick.play(); }

// --- GESTIÓN DE ESTRELLAS ---
function añadirEstrellaAlCofre() {
    let estrellas = parseInt(localStorage.getItem('user_estrellas')) || 0;
    estrellas++;
    localStorage.setItem('user_estrellas', estrellas);
    sonarGanar(); // Suena cada vez que gana una estrella
}

function gastarEstrellas(cantidad) {
    let estrellas = parseInt(localStorage.getItem('user_estrellas')) || 0;
    if (estrellas >= cantidad) {
        localStorage.setItem('user_estrellas', estrellas - cantidad);
        return true;
    }
    return false;
}

// --- GESTIÓN DE PREMIOS (Avatares desbloqueados) ---
function obtenerDesbloqueados() {
    let unlocked = localStorage.getItem('user_unlocked');
    return unlocked ? JSON.parse(unlocked) : [];
}

function desbloquearPremio(emoji) {
    let unlocked = obtenerDesbloqueados();
    if (!unlocked.includes(emoji)) {
        unlocked.push(emoji);
        localStorage.setItem('user_unlocked', JSON.stringify(unlocked));
    }
}