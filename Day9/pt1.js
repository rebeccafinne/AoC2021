import { readFile } from "fs";
readFile("Day9/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split(""));

  let lowestPoints = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const point = arr[i][j];
      //Upper left corner
      if (i === 0 && j === 0) {
        if (point < arr[i + 1][j] && point < arr[i][j + 1]) {
          lowestPoints.push(point);
        }
      }
      //Upper right corner
      else if (i === 0 && j === arr[i].length - 1) {
        if (point < arr[i + 1][j] && point < arr[i][j - 1]) {
          lowestPoints.push(point);
        }
      }
      //Rest of top line
      else if (i === 0) {
        if (
          point < arr[i][j - 1] &&
          point < arr[i][j + 1] &&
          point < arr[i + 1][j]
        ) {
          lowestPoints.push(point);
        }
      }
      //Lower left corner
      else if (i === arr.length - 1 && j === 0) {
        if (point < arr[i - 1][j] && point < arr[i][j + 1]) {
          lowestPoints.push(point);
        }
      }
      //Lower right corner
      else if (i === arr.length - 1 && j === arr[i].length - 1) {
        if (point < arr[i - 1][j] && point < arr[i][j - 1]) {
          lowestPoints.push(point);
        }
      }
      //Rest of lower row
      else if (i === arr.length - 1) {
        if (
          point < arr[i][j - 1] &&
          point < arr[i][j + 1] &&
          point < arr[i - 1][j]
        ) {
          lowestPoints.push(point);
        }
      }
      //Left side
      else if (j === 0) {
        if (
          point < arr[i][j + 1] &&
          point < arr[i - 1][j] &&
          point < arr[i + 1][j]
        ) {
          lowestPoints.push(point);
        }
      }

      //Right side
      else if (j === arr[i].length - 1) {
        if (
          point < arr[i][j - 1] &&
          point < arr[i - 1][j] &&
          point < arr[i + 1][j]
        ) {
          lowestPoints.push(point);
        }
      }
      //Points in the middle
      else {
        if (
          point < arr[i][j - 1] &&
          point < arr[i][j + 1] &&
          point < arr[i - 1][j] &&
          point < arr[i + 1][j]
        ) {
          lowestPoints.push(point);
        }
      }
    }
  }
  console.log(lowestPoints);
  const result = lowestPoints
    .map((point) => parseInt(point) + 1)
    .reduce((sum, curr) => (sum += curr));
  console.log(result);
});
