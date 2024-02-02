const calculator = require('./calculator')
const cp = require('child_process')

// console.log("Satyam")

let myName = 'Satyam'
console.log(global.myName)


calculator.addition(10, 5)
calculator.subtraction(20, 5)
calculator.multiplication(9, 10)
calculator.division(10, 5)

cp.execSync('node app.js')