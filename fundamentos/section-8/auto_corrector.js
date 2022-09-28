const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const compareAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
      return 1;
    } else if (studentAnswers === "N.A") {
     return 0;
    } 
		return -0.5;
};

const corrector = (rightAnswers, studentAnswers, callback) => {
	let points = 0;
	for (let index = 0; index < studentAnswers.length; index += 1) {
		const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
		points += callbackReturn;
	}

  return `Pontos: ${points}`;
};