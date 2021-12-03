import { readFile } from "fs";
readFile("Day3/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  let gammaValue = "";
  let epsilonRate = "";

  console.log(arr);

  console.log(arr.length);

  for (let i = 0; i < arr[0].length; i++) {
    let nbrOfOne = 0;
    let nbrOfZero = 0;

    for (let j = 0; j < arr.length; j++) {
      if (parseInt(arr[j].charAt(i)) === 1) {
        nbrOfOne += 1;
      } else {
        nbrOfZero += 1;
      }
    }

    if (nbrOfZero > nbrOfOne) {
      gammaValue += "0";
      epsilonRate += "1";
    } else {
      gammaValue += "1";
      epsilonRate += "0";
    }
  }

  console.log("Gamma: ", gammaValue, parseInt(gammaValue, 2));
  console.log("Epsilon: ", epsilonRate, parseInt(epsilonRate, 2));
  console.log(parseInt(gammaValue, 2) * parseInt(epsilonRate, 2));
});
