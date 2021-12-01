import * as fs from "fs";

fs.readFile("Day1/input.txt", function (err, data) {
  if (err) throw err;

  const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  let largerMeasurements = 0;
  let prevMeasurement = 10000;

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > prevMeasurement) {
      largerMeasurements += 1;
      prevMeasurement = parseInt(arr[i]);
    } else {
      prevMeasurement = parseInt(arr[i]);
    }
  }

  console.log(largerMeasurements);
});
