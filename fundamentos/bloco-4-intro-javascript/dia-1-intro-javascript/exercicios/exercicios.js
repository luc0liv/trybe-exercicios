// Exercicio 1
// Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
const a = 5;
const b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercicio 2
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const valor1 = 10;
const valor2 = 2;

if (valor1 > valor2) {
  console.log(valor1);
} else {
  console.log(valor2);
}

// Exercício 3
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const v1 = 30;
const v2 = 3;
const v3 = 4;

if (v1 > v2 && v1 > v3) {
  console.log(v1);
} else if (v2 > v3 && v2 > v1) {
  console.log(v2);
} else {
  console.log(v3);
}

// Exercicio 4
// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

let numero = -1;
if (numero > 0) {
  console.log("positive");
} else if (numero < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Exercicio 5
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloUm = 30;
let anguloDois = 60;
let anguloTres = 90;

let sum = anguloUm + anguloDois + anguloTres;

let angulosPositivos = anguloUm > 0 && anguloDois > 0 && anguloDois > 0;

if (angulosPositivos && sum === 180) {
  console.log("É um triângulo válido.");
} else {
  console.log("Não é válido");
}
