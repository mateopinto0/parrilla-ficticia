document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre   = document.getElementById('nombre').value;
    const personas = document.getElementById('personas').value;
    const fecha    = document.getElementById('fecha').value;
    const hora     = document.getElementById('hora').value;

    const mensaje = `Hola! Quiero reservar una mesa 🍖
👤 Nombre: ${nombre}
👥 Personas: ${personas}
📅 Fecha: ${fecha}
🕐 Hora: ${hora}`;

    const numero = '5491163306976'; // tu número con código de país, sin + ni espacios
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});