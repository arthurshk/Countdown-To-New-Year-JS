function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    document.getElementById("days").innerHTML = padNumber(days);
    document.getElementById("hours").innerHTML = padNumber(hours);
    document.getElementById("minutes").innerHTML = padNumber(minutes);
    document.getElementById("seconds").innerHTML = padNumber(seconds);
}

function padNumber(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

setInterval(updateCountdown, 1000);