import { readFile } from "fs";
readFile("Day5/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  arr = arr.map((item) => item.split("->"));

  arr = arr.map((row) => {
    return row.map((coordinate) => coordinate.split(","));
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
      if (prevY === currY) {
        const diffX = Math.abs(prevX - currX);
        for (let i = 0; i <= diffX; i++) {
          allCo.push([
            Math.min(prevX + i, currX + i).toString(),
            prevY.toString(),
          ]);
        }
      }
      return allCo;
    })
  );

  const sortedCoordinates = allCoordinates.flatMap((item) => item);

  let sortedOutArray = {};

  sortedCoordinates.forEach((coordinate) => {
    if (Object.keys(sortedOutArray).includes(coordinate.join(","))) {
      sortedOutArray[coordinate.join(",")] =
        sortedOutArray[coordinate.join(",")] + 1;
    } else {
      sortedOutArray[coordinate.join(",")] = 1;
    }
  }, 0);

  console.log(sortedOutArray);
  console.log(
    Object.values(sortedOutArray).filter((item) => {
      return item >= 2;
    }).length
  );
});
