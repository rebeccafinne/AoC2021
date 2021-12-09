import { readFile } from "fs";
readFile("Day8/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split("|").pop().split(" "));

  console.log(arr);

  const result = arr
    .map((item) =>
      item.filter((currString) => {
        // console.log(currString, currString.length);

        return (
          currString.length === 3 ||
          currString.length === 4 ||
          currString.length === 7 ||
          currString.length === 2
        );
      })
    )
    .reduce((sum, curr) => (sum += curr.length), 0);

  console.log(result);
});
//7=3, 4=4, 8=7, 1=2
