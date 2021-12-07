import { readFile } from "fs";
readFile("Day6/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, "\n")
    .split(",")
    .map((item) => parseInt(item));

  console.log(arr);

  let group = Array(9).fill(0);
  arr.forEach((item) => (group[item] += 1));
  console.log(group);

  for (let i = 0; i < 256; i++) {
    group = group.reduce((result, amount, age) => {
      if (age === 0) {
        result[6] += amount;
        result[8] += amount;
      } else {
        result[age - 1] += amount;
      }
      return result;
    }, Array(9).fill(0));
  }
  console.log(group);

  console.log(
    "Result",
    group.reduce((sum, amount) => (sum += amount))
  );
});
