//3- Faça um programa que dê entrada com 10 números armazene em um vetor, e verifique qual é o maior número e mostre no console.
//nome: ismael henrique cardoso dos santos//
const teclado = require(`prompt-sync`)();
let meuArray: number [] = []
for (let cont = 0; cont < 10; cont++){
meuArray[cont] = parseInt(teclado(`digite o ${cont + 1}:`))

}
let numeroM : number = meuArray[0]

console.log(meuArray)

for (let c = 0; c<10; c++ ){
if (numeroM < meuArray[c]){
numeroM = meuArray[c];
}
}
console.log (numeroM)