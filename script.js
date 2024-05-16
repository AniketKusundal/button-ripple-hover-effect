const MonthName = document.getElementById("month-name")
const DayName = document.getElementById("day-name")
const DayNumber = document.getElementById("day-number")
const Year = document.getElementById("year")




const date = new Date()
console.log(date);



//  Getting Here Date
const month = date.getMonth()

MonthName.innerText = date.toLocaleString("en" , {
    month:"long"
})



// Getting Here Day Name 

DayName.innerText = date.toLocaleString("en" , {
    weekday:"long"
})


DayNumber.innerText = date.getDate();
Year.innerText = date.getFullYear();


