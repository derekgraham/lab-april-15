// This is js file for lab-april-15
// DSG  added function for problem1
// DSG added function for problem2
// DSG added function for problem 3
function sum(numOne, numTwo) {
  //console.log('"The sum of ' + numOne + ' and ' + numTwo + ' is ' + (numOne + numTwo) + '."');
  return numOne + numTwo;
}
function multiply(numOne, numTwo) {
  //console.log('"The product of ' + numOne + ' and ' + numTwo + ' is ' + (numOne * numTwo) + '."');
  return numOne * numTwo;
}

function sumAndMultiply( numOne, numTwo, numThree) {
  var result = [sum(sum(numOne,numTwo),numThree), multiply(multiply(numOne,numTwo),numThree)];
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + result[0] + '."');
  console.log('"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + result[1] + '."');
  return result;
}
