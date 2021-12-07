import { readFile } from "fs";
readFile("Day6/test.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, "\n")
    .split(",")
    .map((item) => parseInt(item));

  // console.log(arr);

  for (let i = 0; i < 80; i++) {
    let newFish = 0;
    if (i === 18) {
      console.log(arr);
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        newFish += 1;
        arr[j] = 6;
      } else {
        arr[j]--;
      }
    }
    for (let k = 1; k <= newFish; k++) {
      arr.push(8);
    }
  }

  console.log("Result", arr.length);
});
