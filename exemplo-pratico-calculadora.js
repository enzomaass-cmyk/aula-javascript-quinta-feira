function calculadora(a, b, operacao) {
    switch (operacao) {
        case `+`: return a + b;
        case `-`: return a - b;
        case `*`: return a * b;
        case `/`:
            return b !== 0 ? a / b : `Erro: Divisao por zero!`;
            default:
             return "Operacao invalida";   
    }
}

console.log("10 + 5 = ", calculadora(10, 5, `+`));
console.log("10 / 5 = ", calculadora(10, 5, `/`));