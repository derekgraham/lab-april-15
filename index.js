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

function sumArray(myArray){
  console.table([myArray]);
  console.log(myArray + ' was passed in as an array of numbers, and ' +
    ( function () { var mySum = 0; for (var i = 0; i < myArray.length ; i++) { mySum += myArray[i]; } return mySum; } () )
  + ' is their sum.');
}

function multiplyArray(myArray){
  console.table([myArray]);
  console.log('The numbers ' + myArray + ' have a product of ' +
  ( function () { var myResult = 1; for (var i = 0; i < myArray.length ; i++) { myResult *= myArray[i]; } return myResult; } () )
  + '.'
);
}

function writeQuestionsToHTML(){

  var myResult = document.getElementById('p1');
  myResult.innerHTML = '<em>(Don\'t forget to create a new branch!)</em> Write a function called <b>sum()</b> that takes in two numbers as arguments and then returns the sum of those numbers.';

  myResult = document.getElementById('p2');
  myResult.innerHTML = 'Write a function called <b>multiply()</b> that takes in two numbers as arguments and then returns the product of those numbers. ';

  myResult = document.getElementById('p3');
  myResult.innerHTML = 'Write a function called <b>sumAndMultiply()</b> that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.';

  myResult = document.getElementById('p4');
  myResult.innerHTML = 'Write a function called <b>sumArray()</b> that takes in an array of numbers as a single argument and then returns the sum of those numbers.';

  myResult = document.getElementById('p5');
  myResult.innerHTML = 'Write a function called <b>multiplyArray()</b> that takes in an array of numbers as a single argument and then returns the product of those numbers.';
}
