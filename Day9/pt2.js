import { readFile } from "fs";
readFile("Day9/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split(""));

  let allBasinLocations = [];
  let basinSizes = [];
  //let searchedPoints = [];

  for (let row = 0; row < arr.length; row++) {
    for (let index = 0; index < arr[row].length; index++) {
      if (
        parseInt(arr[row][index]) !== 9 &&
        !allBasinLocations.find(
          (point) => row === point[0] && index === point[1]
        )
      ) {
        let basinLocation = [];
        findBasinSize(row, index, arr, basinLocation);

        basinSizes.push(basinLocation.length);
        allBasinLocations = allBasinLocations.concat(basinLocation);
      }
    }
  }

  console.log(
    "Result",
    basinSizes
      .sort((a, b) => b - a)
      .splice(0, 3)
      .reduce((prod, curr) => (prod *= curr))
  );
});

const findBasinSize = (row, index, arr, basinLocation) => {
  if (
    parseInt(arr[row][index]) === 9 ||
    basinLocation.find((point) => point[0] === row && point[1] === index)
  ) {
    return;
  }

  basinLocation.push([row, index]);

  for (let rowD = -1; rowD <= 1; rowD++) {
    for (let colD = -1; colD <= 1; colD++) {
      if (
        (rowD === 0 || colD === 0) &&
        (rowD !== 0 || colD !== 0) &&
        arr[row + rowD] !== undefined &&
        arr[row][index + colD]
      ) {
        findBasinSize(row + rowD, index + colD, arr, basinLocation);
      }
    }
  }
};
