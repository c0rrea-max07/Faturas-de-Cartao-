// Lista de faturas do cartão
//1
const listaFaturas = [
    {id: 1, descricao: 'Supermercado', valor: 350.00, paga: true, parcelas: 1},
    {id: 2, descricao: 'Restaurante', valor: 120.00, paga: false, parcelas: 1},
    {id: 3, descricao: 'Notebook', valor: 3000.00, paga: false, parcelas: 10}, // parcelada
    {id: 4, descricao: 'Cinema', valor: 80.00, paga: false, parcelas: 1},
    {id: 5, descricao: 'Farmácia', valor: 150.00, paga: true, parcelas: 1},
]

/////Filter
///For
const pendentesFor = [];
for (let i = 0; i < listaFaturas.length; i++){
    if(!listaFaturas[i].paga){
        pendentesFor.push(listaFaturas[i]);
    }
}
console.log(pendentesFor);

///filter
//2
const faturasPendentes = listaFaturas.filter(fatura => !fatura.paga);
console.log(faturasPendentes);

//MAP aplicar juros do rotativo (8% ao mês)
//for
const faturasComJurosFor = [];
for(let i = 0; i < faturasPendentes.length; i++){
    const f = faturasPendentes[i];
    const valorParcela = f.valor / f.parcelas;
    faturasComJurosFor.push({
        ...f,
        valorParcela: valorParcela,
        valorFinal: +(valorParcela * 1.08).toFixed(2) // juros 8%
    });
}
console.log(faturasComJurosFor);

//map
//3
const faturasComJuros = faturasPendentes.map(fatura =>{
    const valorParcela = fatura.valor / fatura.parcelas;
    return{
        ...fatura,
        valorParcela: valorParcela,
        valorFinal: +(valorParcela * 1.08).toFixed(2)
    }
})
console.log(faturasComJuros);

//////REDUCE - calcula dívida total
//for
let dividaTotalFor = 0;
for (let i = 0; i < faturasComJuros.length; i++){
    dividaTotalFor += faturasComJuros[i].valorFinal * faturasComJuros[i].parcelas;
}
console.log(`R$ ${dividaTotalFor.toFixed(2)}`);

//reduce
//4
const dividaTotal = faturasComJuros.reduce((acumulador, fatura) =>{
    return acumulador + (fatura.valorFinal * fatura.parcelas);
}, 0);
console.log(`R$ ${dividaTotal.toFixed(2)}`);

//5
console.log(`--- RELATÓRIO DE FATURAS DE CARTÃO ---`);
console.log(`Faturas analisadas : ${listaFaturas.length}`);
console.log(`Faturas pendentes : ${faturasPendentes.length}`);
console.log(`Dívida total (com juros do rotativo): R$ ${dividaTotal.toFixed(2)}`);
