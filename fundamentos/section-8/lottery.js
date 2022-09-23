  const checkNumber = (selected, drawn) => {
    console.log(drawn);
    return selected === drawn ? 'Parabéns, você ganhou!' : 'Tente novamente';
  }

  const drawNumbers = (number, callback) => {
    let sort = Math.floor((Math.random() * 5) + 1);
    return callback(number, sort);
  }

  console.log(drawNumbers(2, checkNumber));
  