// Timer
let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

function startTimer() {
  timerInterval = setInterval(incrementTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  updateTimerDisplay();
}

function incrementTimer() {
  timerSeconds++;

  if (timerSeconds === 60) {
    timerSeconds = 0;
    timerMinutes++;
  }

  if (timerMinutes === 60) {
    timerMinutes = 0;
    timerHours++;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById("timerHours").textContent = formatTime(timerHours);
  document.getElementById("timerMinutes").textContent = formatTime(timerMinutes);
  document.getElementById("timerSeconds").textContent = formatTime(timerSeconds);
}

// Stopwatch
let startTime;
let stopwatchMilliseconds = 0;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;
let isStopwatchRunning = false;

function startStopwatch() {
  if (!isStopwatchRunning) {
    startTime = performance.now();
    isStopwatchRunning = true;
    requestAnimationFrame(updateStopwatch);
  }
}

function pauseStopwatch() {
  isStopwatchRunning = false;
}

function resetStopwatch() {
  isStopwatchRunning = false;
  stopwatchMilliseconds = 0;
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  updateStopwatchDisplay();
}

function updateStopwatch(currentTime) {
  if (!isStopwatchRunning) {
    return;
  }

  const elapsedTime = currentTime - startTime;

  stopwatchHours = Math.floor(elapsedTime / 3600000);
  stopwatchMinutes = Math.floor((elapsedTime % 3600000) / 60000);
  stopwatchSeconds = Math.floor((elapsedTime % 60000) / 1000);
  stopwatchMilliseconds = Math.floor(elapsedTime % 1000 / 10);

  updateStopwatchDisplay();

  requestAnimationFrame(updateStopwatch);
}

function updateStopwatchDisplay() {
  document.getElementById("stopwatchHours").textContent = formatTime(stopwatchHours);
  document.getElementById("stopwatchMinutes").textContent = formatTime(stopwatchMinutes);
  document.getElementById("stopwatchSeconds").textContent = formatTime(stopwatchSeconds);
  document.getElementById("stopwatchMilliseconds").textContent = formatTime(stopwatchMilliseconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

// Event listeners
document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("pauseStopwatch").addEventListener("click", pauseStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);