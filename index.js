// write your code below! - Have your variables as local as possible!!!
//
var countDown = `It\'s ${days} days until ${holidayTwo}!`
var days = 20
var greeting = `Happy holidays!`
var greetingOther = `Happy holidays, you!`
var holiday = "Independence Day"
var holidayTwo = "Mother's Day"
var name = "you"
var happy = `Happy ${holiday}, ${name}!`

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
