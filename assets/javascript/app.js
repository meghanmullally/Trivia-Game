// declaring variables

// store the html layout 
var displayTrivia = [];

  // arrary for user Answers  
  var userAns = [];
  var answers = [];

// user's correct answers 
var correct = 0;
var incorrect = 0;


var triviaContainer = document.getElementById("triviaContainer");
var resultsContainer = document.getElementById("results");

var submitButton = document.getElementById("submit");




$(document).ready(function () {

  // Trivia Questions 
  var tennisQuestions = [{
      question: "How many Grand Slams doeo Rodger Federe have?",
      answers: {
        a: 8,
        b: 15,
        c: 23,
        d: 20
      },
      correctAnswer: "d"
    },
    {

      question: "How sets are in a tennis match?",
      answers: {
        a: 4,
        b: 3,
        c: 2,
        d: 5
      },
      correctAnswer: "b"

    },
    {
      question: "How many French Opens has Rafa Nadal won?",
      answers: {
        a: 8,
        b: 10,
        c: 2,
        d: 5
      },
      correctAnswer: "b"

    },
    {

      question: "What was Andy Murray's highest ranking?",
      answers: {
        a: 3,
        b: 5,
        c: 1,
        d: 10
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Novak Djokovic from?",
      answers: {
        a: "Monico",
        b: "Serbia",
        c: "Bulgaria",
        d: "Romania"
      },
      correctAnswer: "b"
    }

  ];



  function createTrivia() {

    // store the html layout 
    var displayTrivia = [];
    var answers = [];

    tennisQuestions.forEach((currentQuestion, questionNumb) => {

  
     

      for (letter in tennisQuestions.answers) {
        // create radio button
        answers.push(
          `<label><input type="radio" name="question${questionNumb}" value="${letter}"> ${letter}: ${currentQuestion.answers[letter]}</label>`
        );
      }

      // add question and answer to the trivia display 
      displayTrivia.push(
        `<div class="slide"><div class="question">${currentQuestion.question}</div>
  <div class="answers"> ${answers.join("")}</div></div>`
      );

    });



    document.getElementById("triviaContainer").innerHTML = displayTrivia.join("");;

  }


  function showResults() {

    var answers = triviaContainer.getElementById("answer");

    // user's correct answers 
    var correct = 0;
    var incorrect = 0;

    // for each question 

    tennisQuestions.forEach((currentQuestion, questionNumb) => {
      var answers = answers[questionNumb];
      var selector = `input[name=question${questionNumb}]:checked`;
      var userAns = (answers.getElementById(selector) || {}).value;


      // if the user answers correctly 

      if (userAns === currentQuestion.correctAnswer) {
        correct++;
      } else if (userAns !== currentQuestion.correctAnswer) {
        // if the answer is incorrect 
        incorrect++;
      };


    });

    resultsContainer.innerHTML = `${correct} out of ${tennisQuestions.length}`;
    resultsContainer.innerHTML = `${incorrect} out of ${tennisQuestions.length}`;

  };

  //display the trivia game

  createTrivia();

  var triviaContainer = document.getElementById("trivia");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  // var answerContainer = document.getElementById("answer");




});