// 5- Faça um programa que dê entrada manual de 10 números
// armazene em um vetor e ordene esses 10 números crescente,
// fazer uso do laço de repetição for.
//nome: ismael henrique cardoso dos santos//
const teclado = require(`prompt-sync`)();
let temporario : number = 0
let numeroM:number = 0
let meuArray: number [] = [];


for (let cont = 0; cont < 10; cont++){
    meuArray[cont] = parseInt(teclado(`digite o ${cont + 1}:`))
}

for (let z = 0; z<10; z++){
    for (let y = z + 1; y < 10; y++){
        if (meuArray[z] > meuArray[y] ){
            temporario = meuArray[z];
            meuArray[z] = meuArray[y];
            meuArray[y] = temporario;
        }    
    }
}
console.log (meuArray)