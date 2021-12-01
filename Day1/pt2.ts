import * as fs from "fs";

fs.readFile("Day1/input1.txt", function (err, data) {
  if (err) throw err;

  const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  let newSums = [];
  let largerMeasurementsSums = 0;
  let prevMeasurement = 10000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2]) {
      newSums.push(
        parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2])
      );
    }
  }

  for (let i = 0; i < newSums.length; i++) {
    if (newSums[i] > prevMeasurement) {
      largerMeasurementsSums += 1;
      prevMeasurement = newSums[i];
    } else {
      prevMeasurement = newSums[i];
    }
  }
  console.log(largerMeasurementsSums);
});
