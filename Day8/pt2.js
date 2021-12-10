import { readFile } from "fs";
readFile("Day8/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split("").join(""));

  const input = arr.map((item) => {
    return item
      .slice(0, item.indexOf("|"))
      .split(" ")
      .map((w) => w.split("").sort().join(""));
  });
  const dictionary = input.map((word) => {
    let result = [];
    result[7] = word.find((item) => item.length === 3);
    result[1] = word.find((item) => item.length === 2);
    result[8] = word.find((item) => item.length === 7);
    result[4] = word.find((item) => item.length === 4);
    //Numbers with 6 letters
    result[6] = word.find(
      (item) =>
        item.length === 6 &&
        !result.includes(item) &&
        result[1].split("").some((c) => !item.includes(c))
    );
    result[0] = word.find(
      (item) =>
        item.length === 6 &&
        !result.includes(item) &&
        result[4].split("").some((c) => !item.includes(c))
    );
    result[9] = word.find(
      (item) => item.length === 6 && !result.includes(item)
      // !result[6].split("").some((c) => !item.includes(c))
    );
    //Numbers with 5 letters
    result[5] = word.find(
      (item) =>
        item.length === 5 &&
        !result.includes(item) &&
        item.split("").every((c) => result[6].includes(c))
    );
    result[3] = word.find(
      (item) =>
        item.length === 5 &&
        !result.includes(item) &&
        item.split("").every((c) => result[9].includes(c))
    );
    result[2] = word.find((item) => !result.includes(item));

    return result;
  });

  const outPutNumbers = arr.map((row, index) =>
    parseInt(
      row
        .split(" ")
        .slice(-4)
        .map((w) => w.split("").sort().join(""))
        .map((item) => dictionary[index].indexOf(item))
        .join("")
    )
  );

  console.log(outPutNumbers.reduce((sum, curr) => (sum += curr)));
});
