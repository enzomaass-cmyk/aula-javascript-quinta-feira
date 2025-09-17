let frutas = ["maçã", "banana"];
//Adicionar
frutas.push("laranja");  //Final
frutas.unshift("morango"); //Início

//remover
frutas.pop(); //Final
frutas.shift(); //Início

//Informações
console.log("Tamanho:", frutas.length);
console.log("Posição da banana:", frutas.includes("banana"));