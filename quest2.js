const prompt = require('prompt-sync')();
const competidores = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do ${i+1}° colocado: `);
    competidores.push(nome);
}

console.log("\n---Lista de Ganhadores---")
console.log(`1° Medalha de Ouro: ${competidores[0]}`);
console.log(`2° Medalha de Prata: ${competidores[1]}`)
console.log(`1° Medalha de Bronze: ${competidores[2]}`)
console.log(`1° Medalha de Honra: ${competidores[3]}`)
console.log(`1° Medalha de Honra: ${competidores[4]}`)

