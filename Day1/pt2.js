"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile("Day1/input1.txt", function (err, data) {
    if (err)
        throw err;
    var arr = data.toString().replace(/\r\n/g, "\n").split("\n");
    var largerMeasurementsSums = 0;
    var prevMeasurement = 10000;
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i + 2]) {
    //       newSums.push(
    //         parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2])
    //       );
    //     }
    //   }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 2]) {
            var newComparison = parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]);
            if (newComparison > prevMeasurement) {
                largerMeasurementsSums += 1;
                prevMeasurement = newComparison;
            }
            else {
                prevMeasurement = newComparison;
            }
        }
    }
    console.log(largerMeasurementsSums);
});
