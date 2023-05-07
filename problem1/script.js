setInterval(() => {
    let currHours = document.getElementById("currHour")
    let currSecond = document.getElementById("currSec")
    let currMinute = document.getElementById("currMin")
    let timePeriods = document.getElementById("timePeriod")
    let currDays = document.getElementById("currDay")
    let date = new Date();
    let currHour = date.getHours();
    let currMin = date.getMinutes();
    let currSec = date.getSeconds();
    let currDay = date.getDay()
    let timePeriod = "AM" ;
    currSec < 10 ? currSec = "0" + currSec : currSec = currSec
    currMin < 10 ? currMin = "0" + currMin : currMin = currMin
    currHour < 10 ? currHour = "0" + currHour : currHour = currHour
    currHour < 12 ? timePeriod = "AM" : timePeriod = "PM"
    currHours.innerHTML = currHour
    currMinute.innerHTML = currMin
    currSecond.innerHTML = currSec
    timePeriods.innerHTML = timePeriod
    currDays.innerHTML = currDay
}, 1000)
