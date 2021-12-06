import { readFile } from "fs";
readFile("Day4/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  let gameInput = arr.shift();
  let gameBoards = [];

  let newBoard = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      if (i === 0) {
      } else {
        gameBoards.push(newBoard);
        newBoard = [];
      }
    } else {
      newBoard.push(arr[i]);
    }
  }
  gameBoards.push(newBoard);
  gameBoards = gameBoards.map((board) =>
    board.map((row) => row.split(" ").filter((item) => item !== ""))
  );

  gameInput = gameInput.split(",");

  for (let i = 0; i < gameInput.length; i++) {
    for (let j = 0; j < gameBoards.length; j++) {
      for (let k = 0; k < gameBoards[j].length; k++) {
        gameBoards[j][k] = gameBoards[j][k].map((row) =>
          row === gameInput[i] ? "*" + row + "*" : row
        );
        //The current board checked at last round
        if (k + 1 === gameBoards[j].length) {
          if (checkForWinner(gameBoards[j])) {
            console.log("someone is a winner!", gameBoards[j]);
            calculateScore(gameInput[i], gameBoards[j]);
            return;
          }
        }
      }
    }
  }
});

const checkForWinner = (board) => {
  const checkRowReducer = (prev, curr) =>
    curr.includes("*") ? prev + 1 : prev;

  const winningRow = board.some((row) => {
    if (row.reduce(checkRowReducer, 0) === 5) {
      return true;
    }

    return false;
  });

  // rotate board 90 deg to reuse row-checking logic for columns
  const rotated = board[0].map((val, index) =>
    board.map((row) => row[index]).reverse()
  );

  const winningColumn = rotated.some((row) => {
    if (row.reduce(checkRowReducer, 0) === 5) {
      return true;
    }

    return false;
  });

  if (winningRow || winningColumn) {
    return true;
  }

  return false;
};

const calculateScore = (drawnNumber, board) => {
  const sumNotMarked = board
    .map((row) =>
      row
        .filter((item) => !item.includes("*") && item.split("*"))
        .reduce((sum, curr) => (sum += parseInt(curr)), 0)
    )
    .reduce((sum, curr) => (sum += curr));
  console.log(sumNotMarked, drawnNumber);
  console.log("Winning score!", sumNotMarked * drawnNumber);
};
