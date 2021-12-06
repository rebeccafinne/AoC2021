import { readFile } from "fs";
readFile("Day5/test.txt", function (err, data) {
  if (err) throw err;

  let arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  arr = arr.map((item) => item.split("->"));

  arr = arr.map((row) => {
    return row.map((item) => item.split(","));
  });

  //   const vectors = arr.filter((item) => {
  //     console.log("item", item);
  //     item[0][0] === item[1][0] ||
  //       item[0][1] === item[1][1] ||
  //       Math.abs(item[0][0] - item[1][0]) === Math.abs(item[0][1] - item[1][1]);
  //   });
  //   console.log(vectors);

  const allCoordinates = arr.map((row) =>
    row.reduce((prevCoordinate, currCoordinate) => {
      let allCo = [];
      const currX = parseInt(currCoordinate[0]);
      const currY = parseInt(currCoordinate[1]);
      const prevX = parseInt(prevCoordinate[0]);
      const prevY = parseInt(prevCoordinate[1]);

      console.log("prev", prevCoordinate);
      console.log("curr", currCoordinate);

      //Is x-coordinates same? If so add the difference in coordinates
      if (prevX === currX) {
        console.log("equal x");
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
        console.log("equal y");
        const diffX = Math.abs(prevX - currX);
        for (let i = 0; i <= diffX; i++) {
          allCo.push([
            Math.min(prevX + i, currX + i).toString(),
            prevY.toString(),
          ]);
        }
      } else if (Math.abs(prevX - currX) === Math.abs(prevY - currY)) {
        const diffY = Math.abs(prevY - currY);

        // for (let i = 0; i <= diffY; i++) {

        if (prevY < currY) {
          if (prevX < currX) {
            for (let i = 0; i <= diffY; i++) {
              console.log(
                "diagonal 1",
                (prevX + i).toString(),
                (prevY + i).toString()
              );
              allCo.push([(prevX + i).toString(), (prevY + i).toString()]);
            }
          } else {
            for (let i = 0; i <= diffY; i++) {
              console.log(
                "diagonal 2",
                (currX + i).toString(),
                (prevY + i).toString()
              );
              allCo.push([(currX + i).toString(), (prevY + i).toString()]);
            }
          }
        } else {
          if (prevX < currX) {
            for (let i = 0; i <= diffY; i++) {
              console.log(
                "diagonal 3",
                (prevX + i).toString(),
                (currY + i).toString()
              );
              allCo.push([(prevX + i).toString(), (currY + i).toString()]);
            }
          } else {
            for (let i = 0; i <= diffY; i++) {
              console.log(
                "diagonal 4",
                (currX + i).toString(),
                (currY + i).toString()
              );
              allCo.push([(currX + i).toString(), (currY + i).toString()]);
            }
          }
          //  }
        }
      }
      //   } else if (prevX < currX) {
      //     const diffY = Math.abs(prevY - currY);
      //     const diffX = Math.abs(prevX - currX);

      //     for (let i = 0; i <= Math.max(diffY, diffX); i++) {
      //       allCo.push([
      //         Math.min(prevX + i, currX + i).toString(),
      //         (currY + i).toString(),
      //       ]);
      //     }
      //     console.log(
      //       Math.min(
      //         prevX + Math.max(diffY, diffX),
      //         currX + Math.max(diffY, diffX)
      //       ).toString(),
      //       (currY + Math.max(diffY, diffX)).toString()
      //     );
      //   }

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
