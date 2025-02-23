function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.getDay();

    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;
    const secElement = document.querySelector('.sec');
    if (secElement) {
        secElement.textContent = seconds;
    }

    const weekDays = document.querySelectorAll('.week div');
    weekDays.forEach((dayDiv, index) => {
        if (index === day) {
            dayDiv.classList.add('active');
        } else {
            dayDiv.classList.remove('active');
        }
    });
}

setInterval(updateClock, 1000);
updateClock();
