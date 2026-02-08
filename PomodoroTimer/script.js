
const display = document.getElementById("displayid");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");
const setBtn = document.getElementById("setbtn");

const inputs = document.querySelectorAll(".settime input");

let totalSeconds = 0;
let timer = null;

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalSeconds);
}

setBtn.addEventListener("click", () => {
    const hours = parseInt(inputs[0].value) || 0;
    const minutes = parseInt(inputs[1].value) || 0;
    const seconds = parseInt(inputs[2].value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    updateDisplay();
});

startBtn.addEventListener("click", () => {
    if (timer !== null || totalSeconds <= 0) return;

    timer = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Finished");
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay();

    inputs.forEach(input => input.value = "");
});