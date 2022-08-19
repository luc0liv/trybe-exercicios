// // Exercicio 1
// // Faça cinco programas, um para cada operação aritmética básica.
// // Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
// const a = 5;
// const b = 6;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // Exercicio 2
// // Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const valor1 = 10;
// const valor2 = 2;

// if (valor1 > valor2) {
//   console.log(valor1);
// } else {
//   console.log(valor2);
// }

// // Exercício 3
// // Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const v1 = 30;
// const v2 = 3;
// const v3 = 4;

// if (v1 > v2 && v1 > v3) {
//   console.log(v1);
// } else if (v2 > v3 && v2 > v1) {
//   console.log(v2);
// } else {
//   console.log(v3);
// }

// // Exercicio 4
// // Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

// let numero = -1;
// if (numero > 0) {
//   console.log("positive");
// } else if (numero < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// // Exercicio 5
// // Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// let anguloUm = 50;
// let anguloDois = 60;
// let anguloTres = 90;

// let sum = anguloUm + anguloDois + anguloTres;

// let angulosPositivos = anguloUm > 0 && anguloDois > 0 && anguloDois > 0;

// if (angulosPositivos && sum === 180) {
//   console.log("É um triângulo válido.");
// } else {
//   console.log("Não é válido");
// }

// Exercício 6
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let peca = "CAVALO";
// let pecaEmMinusculo = peca.toLowerCase();

// switch (pecaEmMinusculo) {
//   case "bispo":
//     console.log("Diagonais");
//     break;
//   case "peão":
//     console.log("Movimento do peão");
//     break;
//   case "rei":
//     console.log("Movimento da rei");
//     break;
//   case "cavalo":
//     console.log("Vaai cavalineo!");
//     break;
//   case "torre":
//     console.log("ih, deu torre");
//     break;
//   case "dama":
//     console.log("a dama, bela e recatada");
//     break;
//   default:
//     console.log("ih, deu ruim");
// }

// CLARAMENTE UMA PESSOA Q NÃO SABE NADA DE XADREZ

// Exercício 7

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 102;
// let conceito = "";
// if (nota < 0 || nota > 100) {
//   console.log("Deu ruim");
// } else if (nota >= 90) {
//   conceito = "A";
// } else if (nota >= 80) {
//   conceito = "B";
// } else if (nota >= 70) {
//   conceito = "C";
// } else if (nota >= 60) {
//   conceito = "D";
// } else if (nota >= 50) {
//   conceito = "E";
// } else {
//   conceito = "F";
// }

// console.log(conceito);

// Exercicio 8
// 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

// let num1 = 2;
// let num2 = 4;
// let num3 = 6;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Exercicio 9
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Exercicio 10

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

// const valorCusto = 115;
// const valorVenda = 175;

// if (valorCusto >= 0 && valorVenda >= 0) {
//   let impostoSobreOCusto = (20 / 100) * valorCusto;
//   let valorCustoTotal = valorCusto + impostoSobreOCusto;
//   let lucro = (valorVenda - valorCustoTotal) * 1000;
//   console.log(lucro);
// } else {
//   console.log("Os valores tem que ser maior que zero");
// }
