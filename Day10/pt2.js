import { readFile } from "fs";
readFile("Day10/input.txt", function (err, data) {
  if (err) throw err;

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split(""));

  let allOpenTags = [];
  let openTags = [];

  const incompleteLines = arr.filter((row) => {
    openTags.length > 0 && allOpenTags.push(openTags);
    openTags = [];
    return row.every((tag) => {
      if (tag === "(" || tag === "{" || tag === "[" || tag === "<") {
        openTags.push(tag);
        return true;
      } else if (
        (tag === ")" && openTags[openTags.length - 1] !== "(") ||
        (tag === "}" && openTags[openTags.length - 1] !== "{") ||
        (tag === "]" && openTags[openTags.length - 1] !== "[") ||
        (tag === ">" && openTags[openTags.length - 1] !== "<")
      ) {
        openTags = [];
        return false;
      } else if (
        (tag === ")" && openTags[openTags.length - 1] == "(") ||
        (tag === "}" && openTags[openTags.length - 1] == "{") ||
        (tag === "]" && openTags[openTags.length - 1] == "[") ||
        (tag === ">" && openTags[openTags.length - 1] == "<")
      ) {
        openTags.pop();
        return true;
      }
      return true;
    });
  });
  openTags.length > 0 && allOpenTags.push(openTags);

  const allClosingTags = allOpenTags.map((row) =>
    row.map((tag) =>
      tag === "(" ? ")" : tag === "{" ? "}" : tag === "[" ? "]" : ">"
    )
  );

  let correctLines = [];

  incompleteLines.forEach((line, index) => {
    allClosingTags.some((closedTag, tagIndex) => {
      if (index === tagIndex) {
        const revClosedTag = closedTag.reverse();

        correctLines.push(line.concat(revClosedTag));
        return true;
      }
    });
  });

  const pointDictionary = {
    1: ")",
    2: "]",
    3: "}",
    4: ">",
  };

  let points = Array(correctLines.length).fill(0);
  allClosingTags.forEach((row, index) => {
    row.forEach((tag) => {
      points[index] *= 5;
      pointDictionary[1] === tag
        ? (points[index] += 1)
        : pointDictionary[2] === tag
        ? (points[index] += 2)
        : pointDictionary[3] === tag
        ? (points[index] += 3)
        : (points[index] += 4);
    });
  });
  console.log(
    points.sort((a, b) => {
      return a - b;
    })[Math.round((points.length - 1) / 2)]
  );
});
