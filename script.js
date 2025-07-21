const telefone = '5548992257674';

function enviarWhats(event) {
    // Evita o comportamento padrão de envio de formulário, se a função for chamada por um formulário.
    // Se for apenas um botão, essa linha não causa problemas.
    if (event) {
        event.preventDefault();
    }

    // Obtém os valores atuais dos campos de entrada.
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Constrói o texto da mensagem.
    const texto = `Olá! Juliana me chamo ${nome}, ${mensagem}`;

    // Codifica a mensagem para que ela possa ser usada na URL (trata espaços, caracteres especiais, etc.).
    const msgnFormatada = encodeURIComponent(texto);

    // Cria a URL do WhatsApp.
    const url = `https://wa.me/${telefone}?text=${msgnFormatada}`;

    // Exibe a URL no console para depuração (opcional).
    console.log(url);

    // Tenta abrir a URL em uma nova janela/aba.
    // Usamos um bloco try-catch para lidar com possíveis erros, especialmente em celulares.
    try {
        window.open(url, '_blank');
    } catch (e) {
        // Fallback caso o window.open falhe ou seja bloqueado (ex: bloqueador de pop-ups).
        // Você pode mostrar um alerta ou fornecer um link direto como alternativa.
        console.error("Não foi possível abrir o WhatsApp:", e);
        alert("Não foi possível abrir o WhatsApp. Por favor, verifique se o aplicativo está instalado ou tente novamente.");
        // Opcional: Se abrir uma nova aba for problemático, você pode redirecionar a janela atual:
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

