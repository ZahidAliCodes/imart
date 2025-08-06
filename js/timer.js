const countDownDate = new Date();
countDownDate.setHours(countDownDate.getHours() + 2);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const timerContainer = document.querySelector(".countdown-timer");

const countdownInterval = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    if (distance < 0) {
        clearInterval(countdownInterval);
        timerContainer.innerHTML = "<h3 style='margin:0;'>DEALS EXPIRED</h3>";
    }
}, 1000);
