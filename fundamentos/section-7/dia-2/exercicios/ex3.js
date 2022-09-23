const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const addNightShift = (obj, key, value) => {
//     obj[key] = value;
//     console.log(obj);
//   }

//   addNightShift(lesson2, 'turno', 'noite');

//   const listKeys = obj => {
//     const objKeys = Object.keys(obj);
//     return objKeys;
//   }

//   console.log(listKeys(lesson1));

//   const objSize = (obj) => {
//     const objectSize = Object.keys(obj).length;
//     return objectSize;
//   }

//   console.log(objSize(lesson3));

//   const listValues = obj => {
//     const objectValues = Object.values(obj);
//     return objectValues;
//   }

//   console.log(listValues(lesson3));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
  console.log(allLessons);

  const quantifyStudents = () => {
   const studentsNumber = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
   return studentsNumber;
  }

  console.log(quantifyStudents());

  const getValueByNumber = (obj) => {
    
  }