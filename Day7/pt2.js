import { readFile } from "fs";
readFile("Day7/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, "\n")
    .split(",")
    .map((item) => parseInt(item));

  const maxValue = Math.max(...arr);

  let currentMinimalCost = 1000000000;

  for (let i = 0; i <= maxValue; i++) {
    const res = arr.reduce((sum, curr) => {
      sum += (Math.abs(curr - i) * (Math.abs(curr - i) + 1)) / 2;
      return sum;
    }, 0);
    if (res < currentMinimalCost) {
      currentMinimalCost = res;
    }
  }
  console.log(currentMinimalCost);
});
