"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
fs.readFile("Day1/input1.txt", function (err, data) {
    if (err)
        throw err;
    var arr = data.toString().replace(/\r\n/g, "\n").split("\n");
    var largerMeasurementsSums = 0;
    var prevMeasurement = 10000;
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
//# sourceMappingURL=pt2.js.map