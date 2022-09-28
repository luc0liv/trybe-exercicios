const wakeUp = () => 'Acordando!';
const drinkCoffee = () => 'Bora tomar café!'.split(' ');
const goToBed = () => 'Partiu dormir';

const doingThings = (func) => console.log(`É hora de: ${func()}`);

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(goToBed);
