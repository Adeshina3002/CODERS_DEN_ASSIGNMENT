// DAY 2 EXERCISE
// LEVEL 1 SOLUTION

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = "30 Days Of JavaScript"

// Print the string on the browser console using console.log()

console.log(challenge)

// Print the length of the string on the browser console using console.log()

console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(3, 5))

console.log(challenge.substring(3, 7))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substr(3, 18))

console.log(challenge.substring(3, 21))

// Check if the string contains a word Script using includes() method

console.log(challenge.includes("Script"))

// Split the string into an array using split() method

console.log(challenge.split(""))

// Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let softwareCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(softwareCompanies.split(','))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))
console.log(challenge[15])

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(11))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('a'))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const string1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string1.indexOf('because'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string1.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string1.search('because'))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let string2 = ' 30 Days Of JavaScript '
console.log(string2.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('30 Days Of JavaScript'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('30 Days Of JavaScript'))

// Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match('a'))
console.log(challenge.match(/a/i))

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

const numberOfDays = '30 Days of '
let programmingLanguage = 'JavaScript'

console.log(numberOfDays.concat(programmingLanguage))

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))

// LEVEL 2 SOLUTION


let quote = 'There is no exercise better for the heart than reaching down and lifting people up'
 let author = 'by John Holmes'
 let message = 'teaches us to help one another.'
 console.log(`The quote '${quote}' ${author} ${message}`)


let quoteByMotherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(quoteByMotherTeresa)

let stringNum = '10'
let num = 10
let floatNum = parseFloat ('9.8')

console.log(typeof (stringNum) == typeof(num))
console.log(typeof (+stringNum) == typeof(num))

// OR
console.log(typeof ('10') == typeof (10))
console.log(typeof (Number("10")) == typeof(10))

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(typeof(floatNum) == typeof (10))

// Check if 'on' is found in both python and jargon

console.log("python".includes('on'))

console.log('jargon'.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence
let stringX = "I hope this course is not full of jargon"

console.log(stringX.includes("jargon"))

// Generate a random number between 0 and 100 inclusively.

console.log(Math.random() * 101)
// OR
console.log(Math.floor(Math.random() * 101))

// Generate a random number between 50 and 100 inclusively.

console.log(Math.random() * (100 - 50 + 1) + 50)

// Generate a random number between 0 and 255 inclusively.

console.log(Math.random() * 256)

// Access the 'JavaScript' string characters using a random number.

console.log(programmingLanguage.charAt(Math.random() * 10))

// Use console.log() and escape characters to print the following pattern

console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`)

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string1.substr(31, 23))

// LEVEL 3 SOLUTION

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let statement1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(statement1.split(/love/gi).length - 1)
// console.log(statement1.match(/love/gi).length)

// let patt = /love/gi

// console.log(statement1.match(patt).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string1.match(/because/gi).length)
// console.log(string1.split(/because/gi).length - 1)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[%@#$&;]/gi,''))


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let extractIncome = (/\d+/gi)
// let extractedValues = annualIncome.match(extractIncome)
// let additionOfValues = parseInt(extractedValues[0]) + parseInt(extractedValues[1]) + parseInt(extractedValues[2])
// console.log(additionOfValues)

let extractedValues = annualIncome.match(/\d+/gi)
let sumOfExtractedValues = Number(extractedValues[0]) + Number(extractedValues[1]) + Number(extractedValues[2])
console.log(sumOfExtractedValues)


