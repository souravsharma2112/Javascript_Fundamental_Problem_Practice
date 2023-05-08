let date = new Date();
let currDate =  date.getDate()
let currMonth =  date.getMonth()
let currYear =  date.getFullYear()

let type1 = document.getElementById("type1")
let type2 = document.getElementById("type2")
let type3 = document.getElementById("type3")
let type4 = document.getElementById("type4")

type1.innerHTML= `${currMonth}-${currDate}-${currYear}`
type2.innerHTML= `${currMonth}/${currDate}/${currYear}`
type3.innerHTML= `${currDate}-${currMonth}-${currYear}`
type4.innerHTML= `${currDate}/${currMonth}/${currYear}`