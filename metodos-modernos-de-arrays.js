let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//filter - filtrar elementos
let pares = numeros.filter(n => n%2 ===0);

//Map - transformar elementos
let quadrados = numeros.map(n => n * n);

//Reduce - reduzir a um valor
let soma = numeros.reduce((acc, n)  => acc + n, 0);

console.log("Pares:", pares);
console.log("Quadrados:", quadrados);
console.log("Soma:", soma);