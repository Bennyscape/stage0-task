function updateTime() {
    const now = new Date();
    const time = {
        hours: now.getHours().toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
        milliseconds: now.getMilliseconds().toString().padStart(3, '0')
    };

    document.getElementById('test-user-time').textContent =
        `${time.hours}:${time.minutes}:${time.seconds}.${time.milliseconds}`;
}

setInterval(updateTime, 10);
updateTime();