const time = document.querySelectorAll('.number');
console.log(time[0]);
const currentTime = new Date();

const dueTime = {
    month: 8,
    day: 1,
    hour: 12,
    minute: 0,
    sec: 0
}


const setDay = (currentDay, currentMonth, dueTime) => {
    let result;
    // console.log(dueTime.month-currentMonth+1)
    switch (dueTime.month - currentMonth-1) {
        case 3:
            result = 61;
            break;
        case 2:
            result = 31;
            break;
        case 1:
            result = 0;
        default:
            break;
    }
    console.log(result)
;    result += currentDay - dueTime.day;
    return result;
}

const setHour = (currentHour, dueTime) => {
    let result;
    result = dueTime.hour - currentHour;
    return result;
}

const setMin = currentMinute => {
    let result;
    result = 60 - currentMinute;
    return result;
}

const setSec = currentSec => {
    let result;
    result = 60 - currentSec;
    return result;
}

const timeLeft = [
    setDay(currentTime.getDate(), currentTime.getMonth(), dueTime),
    setHour(currentTime.getHours(),dueTime),
    setMin(currentTime.getMinutes())+' Minutes',
    setSec(currentTime.getSeconds())+' Seconds'
]
if (timeLeft[1] < 0) {
    timeLeft[0] =(timeLeft[0]-1)+' Days';
    timeLeft[1] = (24+timeLeft[1])+' Hours';
} else {
    timeLeft[0] = timeLeft[0]+' Days';
    timeLeft[1] = timeLeft[1]+' Hours';
}
console.log(timeLeft[1])
time.forEach((el,i) => {
    el.innerHTML = timeLeft[i];
});


console.log(currentTime.getDate());

// setInterval()