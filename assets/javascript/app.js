  // TRIVIA GAME 

  var timeLeft = 30;
  var intervalID;
  var indexQandA = 0;
  var answered = false;
  var correct;


  $("#submit").hide();

  $(document).ready(function () {

    var tennisQuestions = [{
        question: "How many Grand Slams does Rodger Federe have?",
        answers: [8, 15, 23, 20],
        correct: "20"
      },
      {
        question: "How sets are in a tennis match?",
        answers: [4, 3, 2, 5],
        correct: "3"
      },
      {
        question: "How many French Opens has Rafa Nadal won?",
        answers: [8, 10, 2, 5],
        correct: "10"

      },
      {

        question: "What was Andy Murray's highest ranking?",
        answers: [3, 5, 1, 10],
        correct: "1"
      },
      {
        question: "Where is Novak Djokovic from?",
        answers: ["Monaco", "Serbia", "Bulgaria", "Romania"],
        correct: "Serbia"
      }
    ];

    // declaring functions 

    function startGame() {
      console.log("LET'S BEGIN");
      $("#start-button").remove();
      $("#submit").show();
      correctAns = 0;
      incorrectAns = 0;
      loadQandA();
    }

    function loadQandA() {

      if (indexQandA === tennisQuestions.length) {
        return resetGame();
      }

      $("#answers").empty();
      answered = false;
      timeLeft = 30;
      intervalID = setInterval(timer, 1000);
      if (answered === false) {
        timer();
      }
      var correct = tennisQuestions[indexQandA].correct;
      var question = tennisQuestions[indexQandA].question;

      $("#question").append('<h6 class="tennisQs">' + tennisQuestions[indexQandA] + '</h6>')

      $("#question").html(question);
      for (var i = 0; i < 4; i++) {
        var answer = tennisQuestions[indexQandA].answers[i];

        $("#answers").append('<input type="radio" name="answerOptions" class=answerAll value=' + answer + '>' + answer + '</input>')

      }

    }

    // Submit onclick fnc 

    $("#submit").on("click", function () {
      var radios = document.getElementsByName('answerOptions');

      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          // alert(radios[i].value);
          console.log(tennisQuestions[indexQandA].correct);
          console.log(radios[i].value)
          console.log(radios[i].value === tennisQuestions[indexQandA].correct)
          if (radios[i].value === tennisQuestions[indexQandA].correct) {
            alert("correct!!");

          } else {
            alert("wrong")
          }
          // only one radio can be logically checked, don't check the rest
          break;
        }

      }



      if (indexQandA <= tennisQuestions.length) {
        // increment indexQandA then loadQandA 
        indexQandA++
        loadQandA();

      } else {
        resetGame();
      }



    });



    // });

    function timer() {
      if (timeLeft === 0) {
        answered = true;
        clearInterval(intervalID);
      } else if (answered === true) {
        clearInterval(intervalID);
      } else {
        timeLeft--;
        $('#time-left').text('YOU HAVE ' + timeLeft + ' SECONDS TO CHOOSE');
      }
    }


    //load user and questions after the timer runs out 

    function resetGame() {
      $(".answersAll").remove();
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