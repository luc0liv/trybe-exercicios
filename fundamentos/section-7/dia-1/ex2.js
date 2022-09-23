const factorial = number => {
    let result = number;
    if(number === 0 || number === 1) {
        result = 1
    }
    for (let index = result - 1; index >= 1; index -= 1) {
        result *= index;
    }
    return `Esse é o fatorial ${result}`;
}

const recursiveFactorial = number => {
    return number === 1 ? 1 : number * recursiveFactorial(number - 1);
}

console.log(recursiveFactorial(12));

// exercicio 2

const longestWord = (phrase) => {
    const largestWord = phrase.split(' ').sort((a, b) => b.length - a.length);
    return largestWord[0];
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));