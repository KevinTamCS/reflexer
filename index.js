let count = 0;
let timerOn = false;
let timeLeft = 60;

function increment() {
  if (!timerOn) {
    startTimer();
  }

  count++;
  document.getElementById("clicks").innerHTML = `${count} Clicks`;
}

function startTimer() {
  timerOn = true;

  setInterval(() => {
    if (timeLeft > 0) {
      document.getElementById("timer").innerHTML = `${timeLeft--} seconds left`;
    } else {
      document.getElementById("click-button").setAttribute("disabled", true);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
  }, 1000);
}
