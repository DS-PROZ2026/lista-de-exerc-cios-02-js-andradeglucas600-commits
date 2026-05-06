const prompt = require('prompt-sync')();

const listaProibida = ["Lucas", "Miguel", "Matheus"];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome de um visitante: ");

    if (listaProibida.includes(nome)) {
        console.log("Entrada negada!");
    } else {
        console.log("Acesso liberado! Boas vindas!");
    }
}
