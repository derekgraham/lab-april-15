// This is js file for lab-april-15
// DSG  added function for problem1
// DSG added function for problem2
// DSG added function for problem 3
function sum(numOne, numTwo) {
  console.log('"The sum of ' + numOne + ' and ' + numTwo + ' is ' + (numOne + numTwo) + '."');
}
function multiply(numOne, numTwo) {
  console.log('"The product of ' + numOne + ' and ' + numTwo + ' is ' + (numOne * numTwo) + '."');
}
function sumAndMultiply( numOne, numTwo, numThree) {
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + (sum(sum(numOne,numTwo),numThree)) + '."');
  console.log('"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + (multiply(multiply(numOne,numTwo),numThree)) + '."');
}
