import { readFile } from "fs";
readFile("Day10/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split(""));

  console.log(arr);

  let corruptedRowTag = [];

  arr.forEach((row) => {
    let openTags = [];
    row.some((tag) => {
      if (tag === "(" || tag === "{" || tag === "[" || tag === "<") {
        openTags.push(tag);
      } else if (
        (tag === ")" && openTags[openTags.length - 1] !== "(") ||
        (tag === "}" && openTags[openTags.length - 1] !== "{") ||
        (tag === "]" && openTags[openTags.length - 1] !== "[") ||
        (tag === ">" && openTags[openTags.length - 1] !== "<")
      ) {
        openTags.pop();
        corruptedRowTag.push(tag);
        return true;
      } else if (
        (tag === ")" && openTags[openTags.length - 1] == "(") ||
        (tag === "}" && openTags[openTags.length - 1] == "{") ||
        (tag === "]" && openTags[openTags.length - 1] == "[") ||
        (tag === ">" && openTags[openTags.length - 1] == "<")
      ) {
        openTags.pop();
      }
      return false;
    });
  });

  console.log("Corrupted", corruptedRowTag);
  const pointDictionary = {
    3: ")",
    57: "]",
    1197: "}",
    25137: ">",
  };

  const points = corruptedRowTag
    .map((tag) =>
      pointDictionary[1197] === tag
        ? 1197
        : pointDictionary[25137] === tag
        ? 25137
        : pointDictionary[57] === tag
        ? 57
        : 3
    )
    .reduce((sum, curr) => (sum += curr));

  console.log(points);
});
