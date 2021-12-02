function playGame(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
      if (computerSelection === "rock") {
          return "It's a draw";
      } else if (computerSelection === "paper") {
          return "Computer wins!!!";
      } else {
          return "User wins!!!";
      }

  } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
          return "User wins!!!";
      } else if (computerSelection === "paper") {
          return "It's a draw!!!"
      } else {
          return "Computer wins!!!";
      }

  } else {
      if (computerSelection === "rock") {
          return "Computer Wins!!!";
      } else if (computerSelection === "paper") {
          return "User wins!!!";
      } else {
          return "Its a draw!!!"
      }
  }
}

function computerPlay() { 
  let random = ["rock", "paper", "scissors"];
  return random[Math.floor(Math.random() * 3)];
}


var userChoice = 'scissors'; // Input user's choice here.
var computerSelection = computerPlay();
var result = playGame(userChoice, computerSelection)

console.log("Your choice", userChoice);
console.log("Computer's choice", computerSelection);
console.log("The winner is: ", result);