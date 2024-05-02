document.getElementById('meuForm').addEventListener('submit',function(event) {
    event.preventDefault(); //Evitar o envio do formulário

    //Obtém os valores dos campos
    var campoA = parselnt(document.getElementByid('campoA').valve);
    var campoB = parselnt(document.getElementByid('campoB').valve);
    var messageElement = document.getElementByid('mensagem');

    //Validação: Verificar se o número B é maior que número A
if (campoB > campoA){
    messageElement.textContent = "Formulário válido"
    messageElement.style.color= "green";
} else {
// Se for inválido, exibe uma mensagem negativa


messageElement.textContent = "Número B deve ser maior que número A";
messageElement.style.color = red;
}

});

// parágrafo null
{document.ATTRIBUTE_NODE}

