// --- LÓGICA DO CONTADOR REGRESSIVO ---
// Certifique-se de que os IDs no HTML correspondem a estes: dias, horas, minutos, segundos
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

// Data do evento (Ano-Mês-Dia T Hora:Minuto:Segundo)
// ** ATENÇÃO: A data do evento já passou. O contador mostrará 0.
//    Para ver funcionando, mude para uma data futura, por exemplo:
// const dataDoWebinar = new Date("2025-10-28T19:00:00");
const dataDoWebinar = new Date("2025-10-28T19:00:00");


function atualizarContador() {
    const agora = new Date();
    const diferencaTotal = dataDoWebinar - agora;

    // Se a data já passou, para o contador e exibe a mensagem
    if (diferencaTotal < 0) {
        clearInterval(intervalo);
        document.getElementById('countdown').innerHTML = "<h3>O webinar já começou!</h3>";
        return; // Sai da função
    }

    // Cálculos de tempo
    const d = Math.floor(diferencaTotal / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencaTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencaTotal % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencaTotal % (1000 * 60)) / 1000);

    // Exibe os valores na tela, com um zero à esquerda se for menor que 10
    diasEl.innerHTML = d < 10 ? '0' + d : d;
    horasEl.innerHTML = h < 10 ? '0' + h : h;
    minutosEl.innerHTML = m < 10 ? '0' + m : m;
    segundosEl.innerHTML = s < 10 ? '0' + s : s;
}

// Inicia o contador e o atualiza a cada segundo
const intervalo = setInterval(atualizarContador, 1000);
// Chama a função uma vez no início para não esperar 1 segundo para aparecer
atualizarContador();


// --- LÓGICA DAS ANIMAÇÕES DE SCROLL (REVEAL) ---
const elementsToReveal = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

elementsToReveal.forEach(element => {
    observer.observe(element);
});

// A lógica do formulário interativo virá aqui no próximo passo.