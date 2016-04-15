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
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + (sum(sum(numOne,numTwo),numThree)) + '."');
  console.log('"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + (multiply(multiply(numOne,numTwo),numThree)) + '."');
}

function sumArray(myArray){
  console.table(myArray);
  console.log(myArray + ' was passed in as an array of numbers, and ' +
    ( function () { var mySum = 0; for (var i = 0; i < myArray.length ; i++) { mySum += myArray[i]; } return mySum; } () )
  + ' is their sum.');
}
