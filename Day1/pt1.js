"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile("Day1/input.txt", function (err, data) {
  if (err) throw err;
  var arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  var largerMeasurements = 0;
  var prevMeasurement = 10000;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > prevMeasurement) {
      console.log(arr[i], prevMeasurement);
      largerMeasurements += 1;
      prevMeasurement = parseInt(arr[i]);
    } else {
      prevMeasurement = parseInt(arr[i]);
    }
  }
  console.log(largerMeasurements);
});
