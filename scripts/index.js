// let questions = [
//   {
//     question: 'What is the capital of Syria?',
//     answer: 'Damascus'
//   },
//   {
//     question: 'Can fish fly?',
//     answer: 'Yes'
//   },
//   {
//     question: 'Can chickens swim?',
//     answer: 'No'
//   },
//   {
//     question: 'Which city is the biggest in Germany?',
//     answer: 'Berlin'
//   },
//   {
//     question: 'Is Pablo Escobar still alive?',
//     answer: 'No'
//   }
// ];
//
// let score = 0;
//
// for (let i = 0; i < questions.length; i++) {
//   let currentAnswer = '';
//
//   do {
//     currentAnswer = window.prompt(questions[i].question).trim();
//   } while (currentAnswer.length === 0);
//
//   if (currentAnswer.toUpperCase() === questions[i].answer.toUpperCase()) {
//     window.alert('Correct! You might not be as dumb as I thought you were.');
//     score++;
//   } else {
//     window.alert('Wrong human, try again!');
//   }
// }
//
// window.alert(`Pffft! I guess your final score is ${score}, if you even care about those things.`);


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

function printFirstScreen(htmlString){
	let containerElem = document.querySelector('#main-section-content');

	containerElem.innerHTML = htmlString;
}

printFirstScreen('<main class="main-content jumbotron jumbotron-fluid mb-0 d-flex"><div class="fix container text-center m-auto"><h1 class="display-1">Welcome to WebUp Trivia!</h1><button class="btn btn-primary btn-lg" role="button" id="play">Let\'s Play</button></div></main>');




let buttonElem = document.querySelector('#play');

buttonElem.addEventListener('click', event => {
	event.preventDefault();

	printFirstScreen(`
    <main class="main-content jumbotron jumbotron-fluid mb-0 d-flex">
      <div class=" fix container text-center m-auto">
        <h1 class="display-1">WebUp Trivia</h1>
        <p class="lead font-weight-bold col-ms-4 mb-2 mt-5">${firstQuestion}</p>
        <form class="d-flex flex-row mt-5 id="form"">
          <input type="text" class=" answers-user white-space form-control">
          <a class="btn btn-primary btn-lg" role="button" id="play">Answer</a>
        </form>
      </div>
      </main>
  `);
});

let firstQuestion = questions[0].question;
