import { readFile } from "fs";
readFile("Day7/test.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  console.log(arr);
});
