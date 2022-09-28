const myList = [5, 2, 3];

const swap = () => {
    const [primeiro, segundo, terceiro] = myList;
    return [terceiro, segundo, primeiro]
}

console.log(swap());