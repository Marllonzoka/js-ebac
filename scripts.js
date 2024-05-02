documento.getElementById('meuForm').addEventListener('submit', function (evento) {
    evento.preventDefault(); //Evitar o envio do formulário

    Obtém; os; valores; dos; campos;
    var campoA = parselnt(documento.getElementByid('campoA').válvula);
    var campoB = parselnt(documento.getElementByid('campoB').válvula);
    var messageElement = documento.getElementByid('mensagem');

    Verificar; se; o; número; B; é; maior; que; número; A;
    if (campoB > campoA) {
        const newLocal = messageElement.textContent = "Formulário válido";
        messageElement.estilo.cor = "verde";
    } mais; {
        Se; for (inválido, exibe; uma; mensagem) negativa;


        messageElement.textContent = "Número B deve ser maior que número A";
        messageElement.estilo.cor = vermelho;
    }

});
