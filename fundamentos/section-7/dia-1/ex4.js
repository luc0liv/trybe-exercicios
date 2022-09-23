const substituaX = nome => {
    const frase = 'Tryber x aqui';
    const separa = frase.split(' ');

    for (let index in separa) {
        if (separa[index] === 'x') {
            separa[index] = nome;
        }
    }

    return separa.join(' ');
}

const minhasSkills = (teste) => {
    const skills = ['HTML', 'CSS', 'GIT'];
    let frase = `${teste}! Minhas 3 principais skills são: ${skills}.`;
    return frase;
}

console.log(minhasSkills(substituaX('luciana')));