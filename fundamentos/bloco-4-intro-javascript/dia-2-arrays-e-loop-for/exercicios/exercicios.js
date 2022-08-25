let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for(let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let soma = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log("A soma de todos os números do array é " + soma);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = 0;
let soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    media = soma / numbers.length;
}

console.log("Média: ", media);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor que 20")
}

// 5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;

for(let index = 0; index < numbers.length; index += 1) {
    maiorNumero = Math.max.apply(null, numbers);
}

console.log(maiorNumero);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        impares += 1;
    }
}

if(impares === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log("Números impares:", impares);
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1) {
    console.log("testando", menorNumero );
    if(numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}

console.log("menor número", menorNumero);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let newNumbers = [];

for(let index = 0; index <= 25; index += 1) {
    newNumbers.push(index);
    for(let index = 0; index < newNumbers.length; index += 1) {
        console.log(newNumbers[index] / 2)
    }
}

console.log(newNumbers);


