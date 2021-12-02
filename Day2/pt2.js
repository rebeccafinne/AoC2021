import { readFile } from "fs";
readFile("Day2/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  let newArr = arr.map((item) => item.split(" "));
  let sum = { horizontal: 0, vertical: 0, aim: 0 };
  newArr.forEach((item) => {
    if (item[0] === "forward") {
      sum.horizontal += parseInt(item[1]);
      sum.vertical += parseInt(item[1]) * sum.aim;
    } else if (item[0] === "down") {
      sum.aim += parseInt(item[1]);
    } else {
      sum.aim -= parseInt(item[1]);
    }
  });

  console.log(sum);
  console.log(sum.horizontal * sum.vertical);
});
