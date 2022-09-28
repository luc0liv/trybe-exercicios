const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const cars = [palio, shelbyCobra, chiron];

// escreva toObject abaixo

const toObject = (car) => {
    const [model, brand, year] = car;
    return {
        model,
        brand,
        year
    }
}

cars.forEach(car => console.log(toObject(car)));
