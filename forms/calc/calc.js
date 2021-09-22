//you want a program that takes two numbers from the user and reports their sum. 

function Calculate(num1,num2){
  let Calculate = num1+num2
  return Calculate
  }
  
  let num1 = Number(prompt('What is the first number?'))
  let num2 = Number(prompt('What is the second number?'))
  
  let summedNumbers = Calculate(num1,num2)
  console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}.`)
  