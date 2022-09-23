const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
	let points = 0;
  for (let index = 0; index < studentAnswers.length; index += 1) {
		if (rightAnswers[index] === studentAnswers[index]) {
			points += 1;
		} else if(studentAnswers[index] === 'N.A') {
			points += 0
		}
		else  {
			points -= 0.5;
		}

		console.log(points);
	}

	return points;
}

const corrector = (rightAnswers, studentAnswers, callback ) => {
return callback(rightAnswers, studentAnswers);
}

console.log(corrector(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));