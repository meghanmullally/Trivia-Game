// Set timer 

let timeElm = document.getElementById('time-left');
let timer = function(x){
  if (x === 0) {
    return;
  }
  timeElm.innerHTML = x;
  return setTimeout(() => {timer(--x)}, 1000)
}

timer(30);

// after 30 seconds, execute timeUP

setTimeout(timeUp, 1000 * 30);


function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

}
