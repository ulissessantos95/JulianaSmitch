const telefone = '5548992257674'; // Seu número de telefone

function enviarWhats(event) {
    // Evita o comportamento padrão de envio de formulário, se a função for chamada por um formulário.
    // Se for apenas um botão, essa linha não causa problemas, mas é uma boa prática para formulários.
    if (event) {
        event.preventDefault();
    }

    // Obtém os valores atuais dos campos de entrada no momento da chamada da função.
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Constrói a mensagem completa.
    const texto = `Olá! Juliana me chamo ${nome}, ${mensagem}`;

    // Codifica a mensagem para que ela seja segura para uso na URL (trata espaços, caracteres especiais, etc.).
    const msgnFormatada = encodeURIComponent(texto);

    // Cria a URL oficial do WhatsApp Web/App.
    const url = `https://wa.me/${telefone}?text=${msgnFormatada}`;

    // Para depuração: mostra a URL gerada no console do navegador.
    console.log(url);

    // Tenta abrir a URL em uma nova aba/janela.
    // O bloco try-catch ajuda a lidar com situações onde o navegador pode bloquear pop-ups ou falhar ao abrir.
    try {
        window.open(url, '_blank');
    } catch (e) {
        // Se houver um erro (por exemplo, pop-up bloqueado), exibe um alerta para o usuário.
        console.error("Não foi possível abrir o WhatsApp:", e);
        alert("Não foi possível abrir o WhatsApp. Por favor, verifique se o aplicativo está instalado ou tente novamente.");
        // Opcional: Você pode tentar redirecionar a janela atual para a URL do WhatsApp como alternativa:
        // window.location.href = url;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o contêiner que contém todas as imagens e que será rolado
    const projetosCorrosel = document.querySelector('.projetos-corrosel');
    const prevButton = document.querySelector('.carrossel-button.prev');
    const nextButton = document.querySelector('.carrossel-button.next');

    const scrollCarousel = (direction) => {
        const scrollAmount = projetosCorrosel.clientWidth; 
        if (direction === 'next') {
            // Rola para a direita (adiciona à posição 'left')
            projetosCorrosel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth' // Animação suave
            });
        } else {
            projetosCorrosel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth' 
            });
        }

    };
    // Adiciona os "ouvintes" de evento de clique aos botões
    prevButton.addEventListener('click', () => scrollCarousel('prev'));
    nextButton.addEventListener('click', () => scrollCarousel('next'));
});

