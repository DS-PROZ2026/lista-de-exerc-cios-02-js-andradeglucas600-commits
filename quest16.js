const prompt = require('prompt-sync')();

const pessoas = [];

for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    const idade = parseInt(prompt(`Digite a idade de ${nome}: `));

    pessoas.push({
        nome: nome,
        idade: idade
    });
}

let somaIdades = 0;
let maisVelha = pessoas[0];

for (let i = 0; i < pessoas.length; i++) {
    somaIdades += pessoas[i].idade;

    if (pessoas[i].idade > maisVelha.idade) {
        maisVelha = pessoas[i];
    }
}

const media = somaIdades / pessoas.length;

console.log("\n--- Relatório do Grupo ---");
console.log(`Média de idade: ${media.toFixed(2)} anos`);
console.log(`Pessoa mais velha: ${maisVelha.nome} (${maisVelha.idade} anos)`);