// 7- Faça um programa para calcular n! (Fatorial de
//     n), sendo que o valor inteiro de n é fornecido pelo
//     usuário. utilize laço de repetição for.
// nome: ismael henrique cardoso dos santos//

const teclado = require(`prompt-sync`)();

let n : number= parseInt(teclado (`digite um numero:`))
let fatorial : number = 1;

for(let z = 1; z<=n; z++){
fatorial *=z;
}

console.log(fatorial)