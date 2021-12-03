import { readFile } from "fs";
readFile("Day3/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  let oxygenGeneratorRating = arr;
  let CO2ScrubberRating = arr;

  //only oxygen
  for (let i = 0; i < arr[0].length; i++) {
    let nbrOfOne = 0;
    let nbrOfZero = 0;
    if (oxygenGeneratorRating.length === 1) {
      break;
    }
    for (let j = 0; j < oxygenGeneratorRating.length; j++) {
      if (parseInt(oxygenGeneratorRating[j].charAt(i)) === 1) {
        nbrOfOne += 1;
      } else {
        nbrOfZero += 1;
      }
    }
    if (nbrOfZero > nbrOfOne) {
      oxygenGeneratorRating.length > 1 &&
        (oxygenGeneratorRating = oxygenGeneratorRating.filter(
          (item) => item.charAt(i) === "0"
        ));
    } else {
      oxygenGeneratorRating.length > 1 &&
        (oxygenGeneratorRating = oxygenGeneratorRating.filter(
          (item) => item.charAt(i) === "1"
        ));
    }
  }

  //only CO2
  for (let i = 0; i < arr[0].length; i++) {
    let nbrOfOne = 0;
    let nbrOfZero = 0;
    if (CO2ScrubberRating.length === 1) {
      break;
    }
    for (let j = 0; j < CO2ScrubberRating.length; j++) {
      if (parseInt(CO2ScrubberRating[j].charAt(i)) === 1) {
        nbrOfOne += 1;
      } else {
        nbrOfZero += 1;
      }
    }
    if (nbrOfZero > nbrOfOne) {
      CO2ScrubberRating.length > 1 &&
        (CO2ScrubberRating = CO2ScrubberRating.filter(
          (item) => item.charAt(i) === "1"
        ));
    } else {
      CO2ScrubberRating.length > 1 &&
        (CO2ScrubberRating = CO2ScrubberRating.filter(
          (item) => item.charAt(i) === "0"
        ));
    }
  }

  console.log(
    "oxygen: ",
    oxygenGeneratorRating,
    parseInt(oxygenGeneratorRating, 2)
  );
  console.log("CO2: ", CO2ScrubberRating, parseInt(CO2ScrubberRating, 2));
  console.log(
    "Result:",
    parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2)
  );
});
