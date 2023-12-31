/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to the parameter:computersNumber
*/

// YOUR CODE BELOW

function randomNumber(userGuess, computersNumber) {
  if (userGuess <= 0) {
    return "Please input a number between 1 and 100";
  } else if (userGuess >= 101) {
    return "Please input a number between 1 and 100";
  } else if (userGuess > computersNumber) {
    return "Lower";
  } else if (userGuess < computersNumber) {
    return "Higher";
  } else {
    return `The number was ${userGuess}`;
  }
}

randomNumber();

// YOUR CODE ABOVE

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.
    
    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
    - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

let currentNumber = 1;
let lowest = 1;
let highest = 100;
console.log(currentNumber);

// block body arrow function
let createGuess = () => {
  currentNumber = Math.floor(Math.random() * (highest - lowest + 1)+ lowest);
  console.log(currentNumber);
  return currentNumber;
};

createGuess();


function startCompGuess(num) {
  // This should return a string that denotes the first guessed number
  return `Is your number ${currentNumber}?`;
};

startCompGuess(num);


function compGuess(reply) {
  /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.
    
    This should return a string indicating the computers response.
  */

  // switch statement   
  switch (reply) {
    case "lower":
      highest = currentNumber - 1;
      createGuess();  
      return `Your number is lower? Is it ${currentNumber}?`;

    case "higher":
      lowest = currentNumber + 1;
      createGuess(); 
      return `Your number is higher? Is it ${currentNumber}?`;
      
    default:
    return `I knew it was ${currentNumber}!`;
  }
};

compGuess(reply);