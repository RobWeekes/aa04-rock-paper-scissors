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

function getWinner(cmd, cpu) {

  if (cmd === cpu) { // tie
    // console.log("You tie.\n");
    ties++;
    return 0;
  }
  else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
    wins++;
    return 1;
    } else { // loss
        // console.log("You lose...\n");
        losses++;
        return -1;
    }
}

function getCPUMove() {
    const validMoveKeys = Object.keys(VALID_MOVES);  // validMoveKeys = [r, p, s]
    const randomIndex = Math.floor(Math.random() * validMoveKeys.length);  // randomIndex = 0, 1 or 2
    const cpu = validMoveKeys[randomIndex];  // cpu = validMoveKeys[0], validMoveKeys[1], or validMoveKeys[2]
                                          // cpu = 'r', 'p' or 's'
    return cpu;
}

function processMove(cmd, cpu) {
    console.log(`You pick ${cmd}, computer picks ${cpu}.`);

    let result = getWinner(cmd, cpu);
    if(result === 1) console.log("You win!\n");
    if(result === 0) console.log("You tie.\n");
    if(result === -1) console.log("You lose...\n");
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

      let cpu = getCPUMove();
      // console.log(`You pick ${cmd}, computer picks ${cpu}.`);
      processMove(cmd, cpu);

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
