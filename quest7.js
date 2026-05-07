let frota = [
    { modelo: "Volvo FH 540", ultimaRevisao: 4, KmRodados: 11576 },
    { modelo: "VW Delivery 11.180", ultimaRevisao: 8, KmRodados: 9678 },
    { modelo: "Mercedes-Benz", ultimaRevisao: 3, KmRodados: 9957 },
    { modelo: "DAF XF", ultimaRevisao: 10, KmRodados: 15897 }
];

let frotaManutencao = [];

for (let i = 0; i < frota.length; i++) {

    let veiculo = frota[i];

    if (veiculo.KmRodados > 10000 || veiculo.ultimaRevisao > 6) {
        frotaManutencao.push(veiculo);
    }
}

console.log("Veículos para manutenção:");

for (let i = 0; i < frotaManutencao.length; i++) {
    console.log(frotaManutencao[i].modelo);
}

console.log(`Total de veículos: ${frotaManutencao.length}`);