const produtos =  ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
const quantidade = [10, 2, 8, 3];

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto: ${produtos[i]} | Quantidade: ${quantidade[i]}`);
}

let encontrou = false;

console.log("\nProdutos com menos de 5 unidades no estoque:");

for (let i = 0; i < produtos.length; i++) {
    if (quantidade[i] < 5) {
        console.log(`${produtos[i]}`);
        encontrou = true;
    }
}
