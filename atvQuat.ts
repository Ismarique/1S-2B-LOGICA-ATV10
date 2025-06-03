//4 – Faça um programa que dê entrada manual de 10 números armazene em 
// um vetor, em seguida inverter a ordem de armazenamento em outro 
//vetor, utilize laços de repetição para fazer essa atividade\\
//nome: ismael henrique cardoso dos santos//
const teclado = require(`prompt-sync`)();
let meuArray: number [] = [];
let meuArray2:number [] = [];

for (let cont = 0; cont < 10; cont++){
meuArray[cont] = parseInt(teclado(`digite o ${cont + 1}:`))
}

for (let cont = 9; cont >= 0; cont--){

meuArray2[9 - cont] = meuArray[cont]
}

console.log(`${meuArray2}`);

