const time = document.querySelectorAll('.count');
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
    
    switch (dueTime.month - currentMonth) {
        case 4:
            result = 92;
            break;
        case 3:
            result = 61;
            break;
        case 2:
            result = 31;
        default:
            break;
    }
    result -= currentDay;
    return result;
}

const setHour = (currentHour, dueTime) => {
    let result;
    result = dueTime.hour - currentHour;
    return result;
}

const setMin = currentMinute => {
    let result;
    result = 59 - currentMinute;
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
    setMin(currentTime.getMinutes()),
    setSec(currentTime.getSeconds())
]
if (timeLeft[1] < 0) {
    timeLeft[0]--;
    timeLeft[1] = (24+timeLeft[1]);
}

time.forEach((el,i) => {
    el.innerHTML = timeLeft[i];
});

const displayChange = (element,updated) => {
    element.innerHTML = updated;
}

const countdown = () => {
    timeLeft[3]--;
    if(timeLeft[3] < 0){
        timeLeft[2]--;
        timeLeft[3]=59;
        displayChange(time[2], timeLeft[2]);
        displayChange(time[3], 59);
        if(timeLeft[2]<0){
            timeLeft[1]--;
            timeLeft[2]=59;
            displayChange(time[1], timeLeft[1]);
            displayChange(time[2], 59);
            if(timeLeft[1]<0){
                timeLeft[0]--;
                timeLeft[1]=23;
                displayChange(time[0], timeLeft[0]);
                displayChange(time[1], 23);
            }
        }
    } else {
        displayChange(time[3], timeLeft[3]);
    }
}

const counter = setInterval(countdown, 1000);