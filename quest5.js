const prompt = require('prompt-sync')();

const modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
const precos = [110000, 135000, 128000, 105000, 180000];

for (let i = 0; i < modelos.length; i++) {
    console.log(`Modelo: ${modelos[i]} | Preço: R$ ${precos[i]}`);
}

let orcamento = Number(prompt("Digite o valor do seu orçamento: R$ "));

let encontrou = false;

console.log("\nCarros que você pode comprar:");

for (let i = 0; i < modelos.length; i++) {
    if (orcamento >= precos[i]) {
        console.log(`${modelos[i]} por R$ ${precos[i]}`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log("Que tal olhar uns semi-novos?");
}