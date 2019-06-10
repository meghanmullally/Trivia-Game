// declaring variables

 // store the html layout 
 var displayTrivia = [];


    // user's correct answers 
    var correct = 0;
    var incorrect = 0;


  var triviaContainer = document.getElementById("trivia");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");


  // next buttons 
  var previousButton = document.getElementById("previous");

  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slides");
  var currentSlide = 0;



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


    tennisQuestions.forEach((currentQuestion, questionNumb) => {

      // arrary for user Answers  
      var answers = [];
      // var userAns = [];

      for (letter in tennisQuestions.answers) {
        // create radio button
        answers.push(
          `<label><input type="radio" name="question${questionNumb}" value="${letter}"> ${letter} : ${currentQuestion.answers[letter]}</label>`
        );
      }

      // add question and answer to the trivia display 
      displayTrivia.push(
        `<div class="slide><div class="question">${currentQuestion.question}</div>
  <div class="answers"> ${answers.join("")} </div></div>`
      );

    });

    triviaContainer.innerHTML = displayTrivia.join("");


  }


  function showResults() {

    var answerContainer = triviaContainer.querySelectorAll(".answers");

    // user's correct answers 
    var correct = 0;
    var incorrect = 0;

    // for each question 

    tennisQuestions.forEach((currentQuestion, questionNumb) => {
      var answerContainer = answerContainer[questionNumb];
      var selector = `input[name=question${questionNumb}]:checked`;
      var userAns = (answerContainer.querySelectorAll(selector) || {}).value;


      // if the user answers correctly 

      if (userAns === currentQuestion.correctAnswer) {
        correct++;
      } else if (userAns !== currentQuestion.correctAnswer) {
        // if the answer is incorrect 
        incorrect++;
      };


    });

    resultsContainer.innerHTML = `${correct} out of ${tennisQuestions.length}`;

  };


  function showSlide(s) {
    slides[currentSlide].classList.remove("active-slide");
    slides[s].classList.add("active-slide");
    currentSlide = s;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  //display the trivia game

  createTrivia();


  var triviaContainer = document.getElementById("trivia");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");


  // next buttons 
  var previousButton = document.getElementById("previous");

  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slides");
  var currentSlide = 0;


  // submit show the results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);


});