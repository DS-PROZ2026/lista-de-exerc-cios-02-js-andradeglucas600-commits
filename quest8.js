let nomesVendedores = ["Lucas", "Ana", "Carlos", "Marina", "João"];
let totalVendas = [5000, 3000, 7000, 2000, 6000];

let soma = 0;

for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
}

let media = soma / totalVendas.length;

let maiorVenda = totalVendas[0];
let vendedorDestaque = nomesVendedores[0];

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] > maiorVenda) {
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }
}

console.log(`Vendedor em destaque: ${vendedorDestaque}`);

console.log("Abaixo da meta:");

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] < media * 0.70) {
        console.log(nomesVendedores[i]);
    }
}