alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let chute;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;

console.log('Valor do chute:', chute);
console.log('Valor correto:', numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log('Resultado da comparação:', chute == numeroSecreto);

    if (chute == numeroSecreto) {
        break;
    } else {

        if (chute > numeroSecreto) {
            alert('O número secreto é menor');
        } else {
            alert('O número secreto é maior');
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 