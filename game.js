const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

console.log(VALID_MOVES['r']['name']);

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
  // console.log("  Type 'r' for Rock\n  Type 'p' for Paper\n  Type 's' for Scissors\n  Type 'q' to quit\n  Type 'h' for a list of valid commands");
}

function getWinner(move1, move2) {
  let result = 0;

  if (cmd === cpu) { // tie
    console.log("You tie.\n");
    ties++;
  }
  else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
    console.log("You win!\n");
    result++;
    wins++;
  } else { // loss
    console.log("You lose...\n");
    result--;
    losses++;
  }
    return result;  /// 0 for tie, 1 for win, -1 for lose
}


function getCPUMove() {
  // Your code here
}

function processMove(cmd, cpu) {
  // Your code here
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      const validMoveKeys = Object.keys(VALID_MOVES);  // validMoveKeys = [r, p, s]
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);  // randomIndex = 0, 1 or 2
      const cpu = validMoveKeys[randomIndex];  // cpu = validMoveKeys[0], validMoveKeys[1], or validMoveKeys[2]
                                              // cput = 'r', 'p' or 's'
      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      getWinner(move1, move2);
      // if (cmd === cpu) { // tie
      //   console.log("You tie.\n");
      //   ties++;
      // }
      // else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
      //   console.log("You win!\n");
      //   wins++;
      // } else { // loss
      //   console.log("You lose...\n");
      //   losses++;
      // }
    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
