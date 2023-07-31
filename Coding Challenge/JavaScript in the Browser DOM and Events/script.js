// Coding Challenge #1

/*

Implement a game rest functionality, so that the player can make a new guess!

Your tasks:

1. Select the element with the 'again' class and attach a click event handler.

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables.

3. Restore the initial conditions of the message, number, score and guess input fields.

4. Also restore the original background color (#222) and number width (15rem)

*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // When player wins
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // Guess is too High!
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Too High!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game!`;
      document.querySelector(".score").textContent = 0;
    }

    // Guess is too Low!
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Too Low!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game!`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
