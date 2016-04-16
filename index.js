// This is js file for lab-april-15
// DSG  added function for problem1
// DSG added function for problem2
// DSG added function for problem 3
function sum(numOne, numTwo) {
  var myResult = document.getElementById('a1');
  myResult.innerHTML = '"The sum of ' + numOne + ' and ' + numTwo + ' is ' + (numOne + numTwo) + '."<br>';
  return numOne + numTwo;
}
function multiply(numOne, numTwo) {
  var myResult = document.getElementById('a2');
  myResult.innerHTML = '"The product of ' + numOne + ' and ' + numTwo + ' is ' + (numOne * numTwo) + '."<br>';
  return numOne * numTwo;
}

function sumAndMultiply( numOne, numTwo, numThree) {
  var result = [sum(sum(numOne,numTwo),numThree), multiply(multiply(numOne,numTwo),numThree)];
  var myResult = document.getElementById('a3a');
  myResult.innerHTML = '"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + result[0] + '."';
  var myResult = document.getElementById('a3b');
  myResult.innerHTML = '"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + result[1] + '."';
  return result;
}

function sumArray(myArray){
  console.table([myArray]);
  var myResult = document.getElementById('a4');
  myResult.innerHTML = myArray + ' was passed in as an array of numbers, and ' +
    ( function () { var mySum = 0; for (var i = 0; i < myArray.length ; i++) { mySum += myArray[i]; } return mySum; } () ) + ' is their sum.';
}

function multiplyArray(myArray){
  console.table([myArray]);
  var myResult = document.getElementById('a5');
  myResult.innerHTML = 'The numbers ' + myArray + ' have a product of ' +
  ( function () { var myResult = myArray[0]; for (var i = 1; i < myArray.length ; i++) { myResult *= myArray[i]; } return myResult; } () ) + '.';
}
