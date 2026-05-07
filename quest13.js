const prompt = require('prompt-sync')();

let temperaturas = [];
let i = 0;

while (i < 6) {
    let temp = Number(prompt(`Digite a temperatura do sensor ${i + 1}: `));
    temperaturas.push(temp);
    i++;
}

let soma = 0;
let maior = temperaturas[0];
let alertas = 0;

i = 0;

while (i < temperaturas.length) {
    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] > 35) {
        alertas++;
    }

    i++;
}

let media = soma / temperaturas.length;

console.log("\n--- RELATÓRIO DA ESTUFA ---");
console.log(`Temperatura Média: ${media.toFixed(2)}°C`);
console.log(`Máxima Registrada: ${maior}°C`);
console.log(`Sensores em Alerta (acima de 35°C): ${alertas}`);