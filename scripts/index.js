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
let current = 2;
let score = 0;


function printAppScreen(htmlString){
  let containerElem = document.querySelector('#container');
  containerElem.innerHTML = htmlString;
}

// PRINT SECOND-PAGE

function printQuestionPage(){
printAppScreen(`

    <p class="lead col-ms-4 mb-2 mt-5" id="question">${questions[current].question}</p>
    <form class="d-flex flex-row mt-5" id="form">
       <input type="text" id="answers-user" class="white-space form-control">
       <button class="btn btn-primary" href="#" role="button" id="play">check</button>
    </form>
`);

  // let checkButton = document.querySelector(`#check`);
  // checkButton.addEventListener(`click, Game`);
 }

printQuestionPage(0);
