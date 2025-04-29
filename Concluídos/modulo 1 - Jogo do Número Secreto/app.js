// Exibe uma mensagem de boas-vindas ao jogador
alert('Boas vindas ao jogo secreto!');

// Define o número máximo que pode ser sorteado
let numeroMaximo = prompt(`Escolha o número máximo que pode ser sorteado:`);


// Gera um número secreto aleatório entre 1 e numeroMaximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto); // Exibe o número secreto no console para fins de depuração

let chute; // Variável para armazenar o chute do jogador
let tentativas = 1; // Contador de tentativas do jogador

// Loop que continua até que o jogador acerte o número secreto
while (chute != numeroSecreto) {
    // Solicita ao jogador que tente adivinhar o número
    chute = prompt(`Tente adivinhar o número entre 1 a ${numeroMaximo}: `);
    
    // Verifica se o chute está correto
    if (chute == numeroSecreto) {
        break; // Se o chute estiver correto, sai do loop
    } else {
        // Se o chute estiver incorreto, fornece dicas ao jogador
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); // Dica de que o número secreto é menor
        } else {
            alert(`O número secreto é maior que ${chute}`); // Dica de que o número secreto é maior
        }
        
        tentativas++; // Incrementa o contador de tentativas
    }
}

// Pluraliza a palavra "tentativa" dependendo do número de tentativas
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe uma mensagem de sucesso ao jogador, informando o número secreto e o número de tentativas
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);