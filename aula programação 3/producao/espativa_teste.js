// --- 1. TOGGLE DA NAVBAR MOBILE ---
const btnMenu = document.getElementById('btnMenu');
const menuLinks = document.getElementById('menuLinks');

btnMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('ativo');
    const expandido = btnMenu.getAttribute('aria-expanded') === 'true';
    btnMenu.setAttribute('aria-expanded', !expandido);
});

// Fechar menu automaticamente ao clicar em um item (UX One-Page)
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('ativo');
        btnMenu.setAttribute('aria-expanded', 'false');
    });
});

// --- 2. LÓGICA DO CARROSSEL ---
let slideAtual = 0;
const slides = document.querySelectorAll('.carrossel-slide');

function mudarSlide(direcao) {
    slides[slideAtual].classList.remove('ativa');
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    slides[slideAtual].classList.add('ativa');
}

// --- 3. SUBMIT DO FORMULÁRIO (PREPARAÇÃO PARA WHATSAPP) ---
const formCadastro = document.getElementById('formCadastro');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarregar a tela externa
    
    // Captura dos novos inputs estruturados
    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    
    /* 💡 DICA PEDAGÓGICA PARA A PRÓXIMA AULA (Integração com WhatsApp):
       Os alunos podem codificar o texto usando encodeURIComponent() para criar o link:
       
       const textoWhatsApp = encodeURIComponent(`Olá, meu nome é ${nome}. Assunto: ${assunto}. Mensagem: ${mensagem}`);
       const numeroTelefone = "5517999999999"; // Exemplo com o DDD da região
       window.open(`https://wa.me/${numeroTelefone}?text=${textoWhatsApp}`, '_blank');
    */

    // Exibição local temporária de sucesso
    mensagemSucesso.innerHTML = `Perfeito, ${nome}! Seus dados sobre "${assunto}" foram recebidos. Redirecionando...`;
    mensagemSucesso.style.display = 'block';
    
    formCadastro.reset();
});

// --- 4. API DE GEOLOCALIZAÇÃO ---
const btnLocalizacao = document.getElementById('btnLocalizacao');
const resultadoGps = document.getElementById('resultado-gps');

btnLocalizacao.addEventListener('click', () => {
    resultadoGps.innerText = "Buscando satélites...";
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const lat = posicao.coords.latitude.toFixed(4);
                const lon = posicao.coords.longitude.toFixed(4);
                resultadoGps.innerHTML = `<strong>Sua Posição Lateral:</strong><br>Lat: ${lat}<br>Lon: ${lon}`;
            },
            () => {
                resultadoGps.innerText = "Sinal de localização não autorizado pelo usuário.";
            }
        );
    } else {
        resultadoGps.innerText = "Hardware/Navegador incompatível.";
    }
});

// --- 5. BOTÃO VOLTAR AO TOPO (TOP PAGE) ---
const btnVoltarTopo = document.getElementById("btnVoltarTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnVoltarTopo.style.display = "block";
    } else {
        btnVoltarTopo.style.display = "none";
    }
};

btnVoltarTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});