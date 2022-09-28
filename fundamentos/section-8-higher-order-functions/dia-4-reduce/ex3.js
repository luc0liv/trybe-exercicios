const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const expectedResult = 20;

// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const containsA = () => {
  let lettersA = 0;
  names.forEach((name) => {
    const separateLetters = name.split("");
    lettersA += separateLetters.reduce(
      (lettersAInName, currentLetter) =>
        currentLetter.toLowerCase() === "a"
          ? lettersAInName + 1
          : lettersAInName,
      0
    );
  });
  return lettersA;
};

console.log(containsA());
