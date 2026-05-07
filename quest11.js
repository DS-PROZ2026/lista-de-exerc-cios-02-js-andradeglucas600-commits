const prompt = require('prompt-sync')();

let nomes = [];
let nome;
let i = 0;

do {
    nome = prompt("Digite um nome (ou 'fim' para encerrar): ");

    if (nome !== "fim") {
        nomes.push(nome);
    }

} while (nome !== "fim");

let encontrou = false;

do {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado");
        encontrou = true;
        break;
    }

    i++;

} while (i < nomes.length);

if (!encontrou) {
    console.log("Não cadastrado");
}