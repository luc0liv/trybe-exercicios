// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// menu.push("Contato")

// console.log(indexOfPortfolio);
// console.log(menuServices);
// console.log(menu);

let numero = 6;

for(let counter = 1; counter <= 9; counter += 1) {
    console.log(" ")
    console.log(numero * counter);
}

let listaDeNomes = ["Luciana", "Maria", "Juma"];

for(let index = 0; index < listaDeNomes.length; index += 1) {
    console.log(listaDeNomes[index])
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names) {
    console.log(name)
}

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     maiorNumero = Math.max.apply(null, numbers);
// }

// console.log(maiorNumero);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);