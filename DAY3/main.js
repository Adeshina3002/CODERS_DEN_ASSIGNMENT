// DAY 3 EXERCISES
// LEVEL 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Adeshina";
const lastName = "Oladeji";
const country = "Nigeria";
let city = "Lagos";
let age = 10;
let isMarried = "false";
let year = new Date().getFullYear()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10

if (typeof ('10') == 10) {
    console.log(true)
}else{
    console.log(false)
}

// Check if parseInt('9.8') is equal to 10

if (parseInt(9.8) ==  10) {
    console.log(true)
}else {
    console.log(false)
}

// Write three JavaScript statement which provide truthy value.

let num1 = 200
let language = "JavaScript"
let isMorning = true

// Write three JavaScript statement which provide falsy value.

let num2 = 0
let isSleeping = false
let game = ""

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.

let lang1 = "python"
let lang2 = "jargon"

console.log(lang1.length !== lang2.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(! (4 > 3))
console.log(! (4 < 3))
console.log(! (false))
console.log(! (4 > 3 && 10 < 12))
console.log(! (4 > 3 && 10 > 12))
console.log(! (4 === '4'))

// There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') == lang1.includes('on')))

// Use the Date object to do the following activities
let current = new Date()

    // What is the year today?
 console.log(current.getFullYear())
 
    // What is the month today as a number?
console.log(current.getMonth())

    // What is the date today?
console.log(current.getDate())

    // What is the day today as a number?
console.log(current.getDay())

    // What is the hours now?
console.log(current.getHours())

    // What is the minutes now?
console.log(current.getMinutes())

    // Find out the numbers of seconds elapsed from January 1, 1970 to now
console.log(current.getTime())

// LEVEL 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let baseValue = prompt("Enter the base value: ")
let heightValue = prompt("Enter the height value: ")
 const areaOfTriangle = 0.5 * baseValue * heightValue

// console.log(`The area of the triangle is ${areaOfTriangle}`)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt('Enter value of side A: ')
let sideB = prompt('Enter value of side B: ')
let sideC = prompt('Enter value of side C: ')

const perimeterOfTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
// console.log(perimeterOfTriangle)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt('Enter the value of length: ')
let width = prompt('Enter the value of width: ')

const areaOfRectangle = length * width
const perimeterOfRectangle = 2 * (length + width)

// console.log(areaOfRectangle)

// console.log(perimeterOfRectangle)


// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt ('Enter the value for radius: ')
const pi = Math.PI
const areaOfCircle = pi * radius * radius

const circumferenceOfCircle = 2 * pi * radius

// console.log(areaOfCircle)
// console.log(circumferenceOfCircle)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// from the equation of a line y = m*x + c, where slope is m

let x
let y = (2 * x - 2)

let c = -2
let m1 = 2

// for x-intercept, y = 0

 if (y == 0 && c == -2) {
    x = (y - c) / m1
    console.log(x)
    // for y-intercept, x = 0
 } 

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let points = [2, 2, 6, 10]
let x1= points[0]
let y1 = points[1]
let x2 = points[2]
let y2 = points[3]

let m2 = (y2 - y1) / (x2 - x1)
console.log(m2)

// Compare the slope of above two questions.
// console.log(m1 == m2)


// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.  

// finding the intercept of y when x = 0
let a = 0
// let y3 = (a ** 2 + 6 * a + 9 )
// console.log(y3)
// let a = 0

// or

// let a = -3
// if ( a == 0) {
    // let y3 = (a ** 2 + 6 * a + 9 )
    // console.log(y3)
    // let y3 = 0
// } else if (a == -3) {
    // let y3 = (a ** 2 + 6 * a + 9 )
    // console.log(y3)
// }

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hour = prompt ("Enter hours of work")
let ratePerHour = prompt ("Enter rate per hour")
let pay = hour * ratePerHour
console.log(`Your weekly earning is ${pay}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = "Adesh"
if (name.length > 7) {
    console.log(`Your name ${name} is long`)
} else {
    console.log(`Your name ${name} is short`)
}

// Compare your first name length and your family name length and you should get this output.

let first_Name = "Adeshina"
let last_Name = "Oladeji"

if (first_Name.length > last_Name.length) {
    console.log(`Your first name ${first_Name} is longer than your family name ${last_Name}`)
} else{}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 32
let yourAge = 160

if (myAge > yourAge){
    let ageDifference = myAge - yourAge
    console.log(`I am ${ageDifference} years older than you`)
}else if (yourAge > myAge){
    let ageDifference = yourAge - myAge 
    console.log(`You are ${ageDifference} older than i am`)
}

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = prompt("Enter your birth year: ")
let ageCalculator = new Date().getFullYear() - birthYear 
let yearsRemaining = 18 - ageCalculator
console.log(ageCalculator)
if (ageCalculator >= 18) {
    console.log(`You are ${ageCalculator}. You are old enough to drive`)
} else if(ageCalculator < 18) {
    console.log(`You are ${ageCalculator}. You will be allowed to drive in ${yearsRemaining} years`)
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let yearsLived = 100
let getSeconds = 60 * 60 *24 * 365 * yearsLived

console.log(`${getSeconds} seconds`)

// Create a human readable time format using the Date time object

let time = new Date()

console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDay()} ${time.getHours()}:${time.getMinutes()}`)

console.log(`${time.getDay()}-${time.getMonth()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)

console.log(`${time.getDay()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let hours = time.getHours()
let minutes = time.getMinutes()

console.log(`${time.getFullYear()}-0${time.getMonth()}-0${time.getDay()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)

let g = 2.1247
// console.log(g.toFixed(2))

// (5).toString().padStart(2,0)
// console.log(time.padStart(2,0))
let time1 = time.getDay()
console.log(time1)
console.log(time1.toString().padStart(2, '0'))