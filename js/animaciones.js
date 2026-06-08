const contadores = document.querySelectorAll('.text-1[data-target]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarContador(entry.target);
            observer.unobserve(entry.target); // solo anima una vez
        }
    });
}, { threshold: 0.5 });

contadores.forEach(el => observer.observe(el));

function animarContador(el) {
    const target   = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals) || 0;
    const prefix   = el.dataset.prefix || '';
    const suffix   = el.dataset.suffix || '';
    const duracion = 1500; // ms
    const pasos    = 60;
    const intervalo = duracion / pasos;
    let actual = 0;

    const timer = setInterval(() => {
        actual += target / pasos;
        if (actual >= target) {
            actual = target;
            clearInterval(timer);
        }
        el.textContent = prefix + actual.toFixed(decimals) + suffix;
    }, intervalo);
}

