//1 – Calcule a soma de todos os números de 0 ao 50, essa soma deve fazer uso do laço de repetição for.
// nome: ismael henrique cardoso dos santos//

const teclado = require(`prompt-sync`)();
let resultado: number = 0
for (let j = 1; j <= 50; j++){
    console.log (`resultado ${resultado} + ${j} é ${j+resultado}`);
    resultado+=j
    }
