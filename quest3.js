const prompt = require('prompt-sync')();
const mochila = [];
const itensNoChao = ["Pedra", "Madeira", "Tecido", "Adaga", "Moedas", "Esparadrapo"];

for (let i = 0; i < 4; i++) {
    console.log(`Você coletou ${itensNoChao[i]}`);
    mochila.push(itensNoChao[i]);
}

console.log("Aviso! Limite de itens excedido!");

for (let i = 4; i < itensNoChao.length; i++) {
    let escolha = prompt(`Você achou ${itensNoChao[i]}, pegar e substituir o primeiro item? (S/N) `);

    if (escolha == "S") {
        mochila.splice(0, 1, itensNoChao[i]);
        console.log("Item substituído!");
    } else {
        console.log("Não pegou item.");
    }
}

console.log(`Itens na mochila: ${mochila[0]}, ${mochila[1]}, ${mochila[2]}, ${mochila[3]}`);