 const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[%@#$&;]/gi,''))

//  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extractIncome = (/\d+/gi)
let extractedValues = annualIncome.match(extractIncome)
let additionOfValues = parseInt(extractedValues[0]) + parseInt(extractedValues[1]) + parseInt(extractedValues[2])
console.log(additionOfValues)

// console.log(Math.random() * (max - min + 1) + min)

// Range of numbers between 50 and 100

//  console.log(Math.floor(Math.random() * (50) + 50))
console.log(Math.floor(Math.random() * 256))





// DAY 3

-1, -1000, 500, 59
let name = "10"
let firstName = "Tolu"
console.log(name == 10)

let username = undefined

console.log(typeof (username))


let numLives = 5
numLives += 2
// numLives /= 2
console.log(firstNumLive)

