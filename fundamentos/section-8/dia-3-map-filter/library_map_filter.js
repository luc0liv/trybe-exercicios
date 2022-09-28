const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatBookNames = () => {
  const bookNames = books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
  return bookNames;
};

//   console.log(formatBookNames());

const nameAndAge = () => {
  const data = books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);
  return data;
};

//   console.log(nameAndAge());

const fantasyOrScienceFiction = () => {
  const fantasyOrFiction = books.filter(
    (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
  );
  return fantasyOrFiction;
};

// console.log(fantasyOrScienceFiction());

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  const booksOrder = books
    .filter((book) => currentYear - book.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
  return booksOrder;
};

// console.log(oldBooksOrdered());

const fantasyOrScienceFictionAuthors = () => {
  const fantasyOrFiction = books.filter(
    (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
  );
  const formatList = fantasyOrFiction.map((el) => el.author.name).sort();
  return formatList;
};

// console.log(fantasyOrScienceFictionAuthors());

const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  const booksOrder = books
    .filter((book) => currentYear - book.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
  const formatList = booksOrder.map((el) => el.name);
  return formatList;
};

// console.log(oldBooks());

const namesWith3Dots = () =>
  books.find(
    (book) =>
      book.author.name.split(" ").filter((name) => name.endsWith("."))
        .length === 3
  ).name;
  
console.log(namesWith3Dots());
