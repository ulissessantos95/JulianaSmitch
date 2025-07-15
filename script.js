const telefone = '5548992257674';

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
