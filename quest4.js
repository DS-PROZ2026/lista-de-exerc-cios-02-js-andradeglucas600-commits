const prompt = require('prompt-sync')();

const temperaturas = [];

for (let i = 0; i < 7; i++) {
    let temp = Number(prompt(`Digite a temperatura do dia ${i + 1}: `));
    temperaturas.push(temp);
}

let soma = 0;
for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];
}
let media = soma / temperaturas.length;

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Relatório da semana:");
console.log(`Média: ${media.toFixed(2)}°C`);
console.log(`Maior temperatura: ${maior}°C`);
console.log(`Menor temperatura: ${menor}°C`);