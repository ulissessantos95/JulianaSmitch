const telefone = '5548999725267';

function enviarWhats(event) {
    // Evitar comportamento de envio de formulário padrão
    event.preventDefault(); 

    // Obtenha os valores atuais dos campos de entrada dentro da função
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const texto = `Olá! Juliana me chamo ${nome}, ${mensagem}`;
    const msgnFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgnFormatada}`;

    console.log(url);

    window.open(url, '_blank');
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

