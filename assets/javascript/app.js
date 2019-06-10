// Trivia Questions 
var tennisQuestions = [{
    qID: 1,
    question: "How many Grand Slams doeo Rodger Federe have?",
    answers: {
      a: 8,
      b: 15,
      c: 23,
      d: 20
    },
    validAnswer: "d"
  },
  {
    qID: 2,
    question: "How sets are in a tennis match?",
    answers: {
      a: 4,
      b: 3,
      c: 2,
      d: 5
    },
    validAnswer: "b"

  },
  {
    qID: 3,
    question: "How many French Opens has Rafa Nadal won?",
    answers: {
      a: 8,
      b: 10,
      c: 2,
      d: 5
    },
    validAnswer: "b"

  },
  {
    qID: 4,
    question: "What was Andy Murray's highest ranking?",
    answers: {
      a: 3,
      b: 5,
      c: 1,
      d: 10
    },
    validAnswer: "c"
  },
  {
    qID: 5,
    question: "Where is Novak Djokovic from?",
    answers: {
      a: "Monico",
      b: "Serbia",
      c: "Bulgaria",
      d: "Romania"
    },
    validAnswer: "b"
  }

];


// Declaring variables 

var inteveralID;
var score = 0;
var incorrect = 0;
// variable to hold the index of current question 
var questionIndex;
// arrary for user's answers
var userAns = [];
// function to render questions 
var i = 0;


$(document).ready(function () {

  $("#reset").on("click", function () {
    score = 0;
    location.reload();

  });

});

function setTimer() {
  $("#score").empty();


  clearInterval(inteveralID);
  var thirtySeconds = 1000 * 30;
  display = document.querySelector("#time-left");
  displayQuestion(i);
  startTimer(thirtySeconds, display);
}

// Set timer 
function timeLeft() {

  var time = $("#time-left")

  var timerID = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerID);
    } else {
      time.innerHtml = timeLeft + "seconds remaining";
      timeLeft--;
    }
  }

  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

};


function displayQuestion() {
  // questionIndex = i;
  var newInput = $('<h4>');

  newInput.text(tennisQuestions[questionIndex].question);

  // newInput.html(tennisQuestions[questionIndex].question);
  $("#questions").append(newInput);

  // display answers 

  var inputA = $('<h6>');
  inputA.text(tennisQuestions[questionIndex].answers.a);
  $("#answerOptions").append(inputA);
  inputA.attr('id', 'a');
  inputA.val('a');



  var inputB = $('<h6>');
  inputB.text(tennisQuestions[questionIndex].answers.b);
  $("#answerOptions").append(inputB);
  inputB.attr('id', 'b');
  inputB.val('b');

  var inputC = $('<h6>');
  inputC.text(tennisQuestions[questionIndex].answers.c);
  $("#answerOptions").append(inputC);
  inputC.attr('id', 'c');
  inputC.val('c');

  var inputD = $('<h6>');
  inputD.text(tennisQuestions[questionIndex].answers.d);
  $("#answerOptions").append(inputD);
  inputD.attr('id', 'd');
  inputD.val('d');


  $("#answerOptions h6").on("click", function () {
    var optionID = $(this).attr('id')
    console.log("id is " + optionID);
    userAns = $("#" + optionID).val();
    console.log("inside click " + userAns);
    checkAnswer();
  });

}

function checkAnswer() {
  if (userAns === tennisQuestions[questionIndex].validAnswer) {
    score++;

  } else if (userAns !== tennisQuestions[questionIndex].validAnswer) {
    incorrect--;
  };

  $("#questions").empty();
  $("#answerOptions").empty();
  clearInterval(inteveralID);


  var questionValidAns = '';
  if (tennisQuestions[questionIndex].validAnswer === 'a') {
    questionValidAns = tennisQuestions[questionIndex].answers.a;
  } else if (tennisQuestions[questionIndex].correctAnswer === 'b') {
    questionValidAns = tennisQuestions[questionIndex].answers.b;
  } else if (tennisQuestions[questionIndex].correctAnswer === 'c') {
    questionValidAns = tennisQuestions[questionIndex].answers.c;
  } else if (tennisQuestions[questionIndex].correctAnswer === 'd') {
    questionValidAns = tennisQuestions[questionIndex].answers.d;
  }

  if (score > 0) {
    $("#score").html("Correct!");
  } else if (incorrect > 0) {
    $("#score").html("Incorrect!");
  }


};



// start game 

$("#start").on("click", function () {

  displayQuestion();
  timeLeft();

});