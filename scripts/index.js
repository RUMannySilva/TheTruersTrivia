let questions = [
  {
    question: 'What is the capital of Syria?',
    answer: 'Damascus'
  },
  {
    question: 'Can fish fly?',
    answer: 'Yes'
  },
  {
    question: 'Can chickens swim?',
    answer: 'No'
  },
  {
    question: 'Which city is the biggest in Germany?',
    answer: 'Berlin'
  },
  {
    question: 'Is Pablo Escobar still alive?',
    answer: 'No'
  }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let currentAnswer = '';

  do {
    currentAnswer = window.prompt(questions[i].question).trim();
  } while (currentAnswer.length === 0);

  if (currentAnswer.toUpperCase() === questions[i].answer.toUpperCase()) {
    window.alert('Correct! You might not be as dumb as I thought you were.');
    score++;
  } else {
    window.alert('Wrong human, try again!');
  }
}

window.alert(`Pffft! I guess your final score is ${score}, if you even care about those things.`);
