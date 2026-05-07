const prompt = require('prompt-sync')();

let consumo = [];
let i = 0;

while (i < 6) {
    let litros = Number(prompt(`Digite o consumo de água do Dia ${i + 1} (em litros): `));
    consumo.push(litros);
    i++;
}

let total = 0;
let maior = consumo[0];
let diaMaior = 1;

i = 0;

while (i < consumo.length) {
    total += consumo[i];

    if (consumo[i] > maior) {
        maior = consumo[i];
        diaMaior = i + 1;
    }

    i++;
}

let media = total / consumo.length;

console.log("\n--- RELATÓRIO DE CONSUMO ---");
console.log(`Consumo Total da Semana: ${total} litros`);
console.log(`Média Diária: ${media.toFixed(2)} litros`);
console.log(`Maior Pico: ${maior} litros (Dia ${diaMaior})`);