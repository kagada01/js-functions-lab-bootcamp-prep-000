// write your code below!
var countDown = `It\'s ${days} days until ${holidayTwo}!`
var days = 20
var greeting = `Happy holidays!`
var greetingOther = `Happy holidays, you!`
var happy = `Happy ${holiday}, ${name}!`
var holiday = "Independence Day"
var holidayTwo = "Mother's Day"
var name = "you"


function happyHolidays() {
  return(greeting)
}

function happyHolidaysTo(name) {
  return(greetingOther)
}

function happyHolidayTo(holiday, name) {
  return(happy)
}

function holidayCountdown(days, holidayTwo) {
  return(countDown)
}
