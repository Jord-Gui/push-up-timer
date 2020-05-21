function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function toggleStartPauseButton() {
    startElement.classList.toggle("hide-btn");
    pauseElement.classList.toggle("hide-btn");
}

const startElement = document.getElementById("start");
const pauseElement = document.getElementById("pause");
const resetElement = document.getElementById("reset");
let secondElement = document.getElementById("seconds");
let minuteElement = document.getElementById("minutes");
let hourElement = document.getElementById("hours");
const defaultSeconds = secondElement.textContent;
const defaultMinutes = minuteElement.textContent;
const defaultHours = hourElement.textContent;
const timer = document.getElementById("timer");
let timerInterval = null;

startElement.addEventListener("click", () => {
    if (timerInterval === null) { // check start button hasn't already been pressed
        timerInterval = setInterval(() => {
            let seconds = parseInt(secondElement.textContent);
            let minutes = parseInt(minuteElement.textContent);
            let hours = parseInt(hourElement.textContent);
            if (hours === 0 && seconds === 0 && minutes === 0) {
                timer.style.color = "red";
                clearInterval(timerInterval);
                timerInterval = null;
                // ensure that alert happens after the colour changes to red
                // without timeout, the alert happens first
                // otherwise browser doesn't have time to render before the alert fires
                setTimeout(() => alert("DO SOME PUSHUPS"), 0);
            }
            else {
                let newSeconds = seconds - 1;
                if (newSeconds < 0) {
                    newSeconds = 59;
                    minutes -= 1;
                }
                // debugger
                let newMinutes = minutes
                if (newMinutes < 0) {
                    newMinutes = 59
                    hours -= 1;
                }
                // debugger
                newSeconds = addZero(newSeconds);
                newMinutes = addZero(newMinutes);
                // debugger
                let newHours = addZero(hours);
                secondElement.textContent = newSeconds;
                minuteElement.textContent = newMinutes;
                hourElement.textContent = newHours;
                // debugger;
            }
        }, 1000);
    };
    toggleStartPauseButton();
});

pauseElement.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    toggleStartPauseButton();
})

resetElement.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    secondElement.textContent = defaultSeconds;
    minuteElement.textContent = defaultMinutes;
    hourElement.textContent = defaultHours;
    startElement.classList.remove("hide-btn");
    pauseElement.classList.add("hide-btn");
    timer.style.color = "black";
})
