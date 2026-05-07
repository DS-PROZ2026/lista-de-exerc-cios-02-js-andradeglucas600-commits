const prompt = require('prompt-sync')();

const destinos = [];

for (let i = 0; i < 10; i++) {
    const destino = prompt(`Digite o nome do destino ${i + 1}: `);
    const passagem = parseFloat(prompt(`Digite o preço da passagem para ${destino}: `));
    const hospedagem = parseFloat(prompt(`Digite o valor total da hospedagem em ${destino}: `));

    destinos.push({
        destino: destino,
        passagem: passagem,
        hospedagem: hospedagem,
        total: passagem + hospedagem
    });
}

let somaPassagens = 0;
let maisCaro = destinos[0];
let temBarato = false;

for (let i = 0; i < destinos.length; i++) {
    somaPassagens += destinos[i].passagem;

    if (destinos[i].total > maisCaro.total) {
        maisCaro = destinos[i];
    }

    if (destinos[i].total < 1000) {
        temBarato = true;
    }
}

const media = somaPassagens / destinos.length;

console.log("\n--- Relatório de Viagens ---");
console.log(`Média do preço das passagens: R$ ${media.toFixed(2)}`);
console.log(`Destino mais caro: ${maisCaro.destino} (R$ ${maisCaro.total.toFixed(2)})`);

if (temBarato) {
    console.log("Existe pelo menos um destino com custo total abaixo de R$ 1000,00.");
} else {
    console.log("Nenhum destino custa menos de R$ 1000,00.");
}