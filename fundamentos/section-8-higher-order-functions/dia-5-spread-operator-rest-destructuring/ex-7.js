const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
       // measurementUnit: unidade de medida
  ];
  
  // escreva shipLength abaixo
  
  const shipLength = (ship) => {
    const { name, length, measurementUnit } = ship;
    return `${name} is ${length} ${measurementUnit} long`;
  }

  ships.forEach(ship => console.log(shipLength(ship)));
  