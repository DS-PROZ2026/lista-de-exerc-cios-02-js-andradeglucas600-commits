const prompt = require('prompt-sync')();

const manutencoes = [];

for (let i = 0; i < 4; i++) {
    const custo = parseFloat(prompt(`Digite o custo da manutenção ${i + 1}: `));
    manutencoes.push(custo);
}

let total = 0;
let maisCara = manutencoes[0];

for (let i = 0; i < manutencoes.length; i++) {
    total += manutencoes[i];

    if (manutencoes[i] > maisCara) {
        maisCara = manutencoes[i];
    }
}

const media = total / manutencoes.length;

console.log("\n--- Relatório de Manutenções ---");
console.log(`Custo Total: R$ ${total.toFixed(2)}`);
console.log(`Custo Médio por Máquina: R$ ${media.toFixed(2)}`);
console.log(`Manutenção Mais Cara: R$ ${maisCara.toFixed(2)}`);