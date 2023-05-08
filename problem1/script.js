setInterval(() => {
    let currTime = document.getElementById("currTime")
    let currDay = document.getElementById("currDay")
    let currDate = document.getElementById("currDate")
    let greet = document.getElementById("greet")
    let date = new Date();
    let currHour = date.getHours();
    let currMin = date.getMinutes();
    let currSec = date.getSeconds();
    let currDayis = date.getDay()
    let currDateis = date.getDate();
    let currMonthis = date.getMonth();
    let currYearis = date.getFullYear();
    const weeks = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
    currHour = (currHour > 12) ? currHour - 12 : currHour;
    currSec < 10 ? currSec = "0" + currSec : currSec = currSec
    currMin < 10 ? currMin = "0" + currMin : currMin = currMin
    currHour < 10 ? currHour = "0" + currHour : currHour = currHour
    date.getHours() < 12 ? timePeriod = "AM" : timePeriod = "PM"
    if (currHour == 0){ currHour = 12}
    currDay.innerHTML = weeks[currDayis]
    currDate.innerHTML = `${currDateis} / ${currMonthis} / ${currYearis} `
    currTime.innerHTML = `${currHour} : ${currMin} : ${currSec} ${timePeriod}`
    const Greet = ["Morning" , "Afternoon", "Evening" , "Night"]
    if (date.getHours() < 12) {
        greet.innerHTML = `Good ${Greet[0] }`
     }
    if (date.getHours() >= 12 || date.getHours() > 18) {
        greet.innerHTML = `Good ${Greet[1]}`
     }
    if (date.getHours() >= 18 || date.getHours() > 22) {
        greet.innerHTML = `Good ${Greet[2]}`
    }
    if (date.getHours() >= 22 || date.getHours() > 24) {
        greet.innerHTML = `Good ${Greet[3]}`
    }
}, 1000)