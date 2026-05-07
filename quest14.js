const prompt = require('prompt-sync')();

let consumos = [];
let i = 0;

while (i < 5) {
    let km = Number(prompt(`Digite o consumo (km/l) do caminhão ${i + 1}: `));
    consumos.push(km);
    i++;
}

let soma = 0;
let maior = consumos[0];
let menor = consumos[0];

i = 0;

while (i < consumos.length) {
    soma += consumos[i];

    if (consumos[i] > maior) {
        maior = consumos[i];
    }

    if (consumos[i] < menor) {
        menor = consumos[i];
    }

    i++;
}

let media = soma / consumos.length;

console.log("\n--- RELATÓRIO DA FROTA ---");
console.log(`Média da Frota: ${media.toFixed(2)} km/l`);
console.log(`Melhor Consumo: ${maior} km/l`);
console.log(`Pior Consumo: ${menor} km/l`);