const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  const getAuthorBornIn = (year) => {
    const author = books.find(book => book.author.birthYear === year);
    return author;
  }

  console.log(getAuthorBornIn(1947));

  const shortestName = () => {
    let bookName = books[0].name;
    books.forEach(book => {
        if (book.name.length < bookName.length) {
            bookName = book.name;
        }
    })
    return bookName;
  }

  console.log(shortestName());


  const getBookNameWithChars = (characters) => {
    const name = books.find(book => book.name.length === characters);
    return name;
  }

  console.log(getBookNameWithChars(26));

  const booksOrderedByReleaseYearDesc = () => {
    return books.sort((a,b) => b.releaseYear - a.releaseYear);
  }

  console.log(booksOrderedByReleaseYearDesc());

  const everyoneWasBornOnSecXX = () => {
    return books.every(book => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
  }

  console.log(everyoneWasBornOnSecXX());

  const someBookWasReleaseOnThe80s = () => {
    return books.some(book => book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }

  console.log(someBookWasReleaseOnThe80s());

  const authorUnique = () => {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }

  console.log(authorUnique());
