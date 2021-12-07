import { readFile } from "fs";
readFile("Day5/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  arr = arr.map((item) => item.split("->"));

  arr = arr.map((row) => {
    return row.map((item) => item.split(","));
  });

  const allCoordinates = arr.map((row) =>
    row.reduce((prevCoordinate, currCoordinate) => {
      let allCo = [];
      const currX = parseInt(currCoordinate[0]);
      const currY = parseInt(currCoordinate[1]);
      const prevX = parseInt(prevCoordinate[0]);
      const prevY = parseInt(prevCoordinate[1]);

      //Is x-coordinates same? If so add the difference in coordinates
      if (prevX === currX) {
        const diffY = Math.abs(prevY - currY);
        for (let i = 0; i <= diffY; i++) {
          allCo.push([
            prevX.toString(),
            Math.min(prevY + i, currY + i).toString(),
          ]);
        }
      }
      //Is y-coordinates same? If so add the difference in coordinates
      else if (prevY === currY) {
        const diffX = Math.abs(prevX - currX);
        for (let i = 0; i <= diffX; i++) {
          allCo.push([
            Math.min(prevX + i, currX + i).toString(),
            prevY.toString(),
          ]);
        }
      } else if (Math.abs(prevX - currX) === Math.abs(prevY - currY)) {
        const diff = Math.abs(prevY - currY);

        if (prevY < currY) {
          if (prevX < currX) {
            for (let i = 0; i <= diff; i++) {
              allCo.push([(prevX + i).toString(), (prevY + i).toString()]);
            }
          } else {
            for (let i = 0; i <= diff; i++) {
              allCo.push([(prevX - i).toString(), (prevY + i).toString()]);
            }
          }
        } else {
          if (prevX < currX) {
            for (let i = 0; i <= diff; i++) {
              allCo.push([(currX - i).toString(), (currY + i).toString()]);
            }
          } else {
            for (let i = 0; i <= diff; i++) {
              allCo.push([(currX + i).toString(), (currY + i).toString()]);
            }
          }
        }
      }
      return allCo;
    })
  );

  let sortedCoordinates = allCoordinates
    .flatMap((item) => item)
    .map((item) => item.join("."));

  let sortedOutArray = {};

  sortedCoordinates = sortedCoordinates.sort((a, b) => a - b);

  sortedCoordinates.forEach((coordinate) => {
    if (!sortedOutArray[coordinate]) {
      sortedOutArray[coordinate] = 1;
    } else {
      sortedOutArray[coordinate] = sortedOutArray[coordinate] + 1;
    }
  });

  console.log(
    "Result",
    Object.values(sortedOutArray).reduce(
      (sum, item) => (item > 1 ? sum + 1 : sum),
      0
    )
  );
});
