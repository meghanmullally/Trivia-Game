$(document).ready(function () {

  // Declaring variables 

  var userPick = [];

  var correct = 0;
  var incorrect = 0;
  var missed = 0;
  var questionCounter = 0;
  var images;

  var triviaQuestions = [{

      question: "How many Grand Slams doeo Rodger Federe have?",
      choices: [8, 15, 23, 20],
      images: [""],
      validAnswer: 3
    },
    {
      question: "How sets are in a tennis match?",
      choices: [4, 3, 2, 5],
      images: [""],
      validAnswer: 1

    },
    {
      question: "How many French Opens has Rafa Nadal won?",
      choices: [8, 10, 2, 5],
      images: [""],
      validAnswer: 1

    },
    {
      question: "What was Andy Murray's highest ranking?",
      choices: [3, 5, 1, 10],
      images: [""],
      validAnswer: 2
    }

  ];


  // start game 

  $("#start-button").on("click", function () {
    

  })

  $("#time-left").append()
  setTimeout(function () {
   // Set timer 

   // after 30 seconds, execute timeUP

   setTimeout(timeUp, 1000 * 30);


   function timeUp() {
     // in the element with an id of time-left add an h2 saying Time's Up!
     // console log done
     console.log("done");
     $("#time-left").append("<h2>Time's Up!</h2>");
     console.log("time is up");

   }

 })



})