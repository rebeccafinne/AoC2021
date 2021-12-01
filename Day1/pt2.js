"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile("Day1/input1.txt", function (err, data) {
    if (err)
        throw err;
    var arr = data.toString().replace(/\r\n/g, "\n").split("\n");
    var newSums = [];
    var largerMeasurementsSums = 0;
    var prevMeasurement = 10000;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 2]) {
            newSums.push(parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]));
        }
    }
    for (var i = 0; i < newSums.length; i++) {
        if (newSums[i] > prevMeasurement) {
            largerMeasurementsSums += 1;
            prevMeasurement = newSums[i];
        }
        else {
            prevMeasurement = newSums[i];
        }
    }
    console.log(largerMeasurementsSums);
});
