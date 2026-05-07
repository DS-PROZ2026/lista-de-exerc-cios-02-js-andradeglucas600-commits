const estoque = [
    { produto: "Camiseta", quantidade: 15 },
    { produto: "Calça", quantidade: 10 },
    { produto: "Meia", quantidade: 50}
];

let total = 0;

for (let i = 0; i < estoque.length; i++) {
    total += estoque[i].quantidade;
}

console.log(`Total de itens no estoque: ${total}`);