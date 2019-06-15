  // TRIVIA GAME 

  var correctAns = 0;
  var incorrectAns = 0;
  var timeLeft = 30;
  var intervalID;
  var indexQandA = 0;
  var answered = false;
  var correct;

  $(document).ready(function () {

    var tennisQuestions = [{
        question: "How many Grand Slams doeo Rodger Federe have?",
        answers: [8, 15, 23, 20],
        correct: "3"
      },
      {
        question: "How sets are in a tennis match?",
        answers: [4, 3, 2, 5],
        correct: "1"
      },
      {
        question: "How many French Opens has Rafa Nadal won?",
        answers: [8, 10, 2, 5],
        correct: "1"

      },
      {

        question: "What was Andy Murray's highest ranking?",
        answers: [3, 5, 1, 10],
        correct: "2"
      },
      {
        question: "Where is Novak Djokovic from?",
        answers: ["Monico", "Serbia", "Bulgaria", "Romania"],
        correct: "1"
      }
    ];

    // declaring functions 

    function startGame() {
      console.log("LET'S BEGIN");
      $("#start-button").remove();
      correctAns = 0;
      incorrectAns = 0;
      loadQandA();
    }

    function loadQandA() {
      answered = false;
      timeLeft = 30;
      intervalID = setInterval(timer, 1000);
      if (answered === false) {
        timer();
      }
      correct = tennisQuestions[indexQandA].correct;
      var question = tennisQuestions[indexQandA].question;
      $("#question").html(question);
      for (var i = 0; i < 4; i++) {
        var answer = tennisQuestions[indexQandA].answers[i];
        $("#answer").append('<div class=answerAll id=' + i + '>' + answer + '</div>')
      }

    }

    function timer() {
      if (timeLeft === 0) {
        answered = true;
        clearInterval(intervalID);
        $("#question").text("THE CORRECT ANSWER IS: " + tennisQuestions[indexQandA].answer[correct]);
      } else if (answered === true) {
        clearInterval(intervalID);
      } else {
        timeLeft--;
        $('#time-left').text('YOU HAVE ' + timeLeft + ' SECONDS TO CHOOSE');
      }
    }

    function correctAnswer() {
      correctAns++;
      restGame();
    }

    function incorrectAnswer() {
      incorrectAns++;
      restGame();

    }

    function resetGame() {
      $("#answersAll").remove();
      if (indexQandA < tennisQuestions.length) {
        setTimeout(function () {
          loadQandA();

        })
      } else {
        setTimeout(function () {
          $("#question").remove();
          $("#time-left").remove();
          $("#answers").remove();
     

        })
      }
    }


    $("#start-button").on("click", function () {
      $("#start-button");
      startGame();
    });

  });