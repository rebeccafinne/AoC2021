import { readFile } from "fs";
readFile("Day8/test.txt", function (err, data) {
  if (err) throw err;

  const decoding = {
    acedgfb: {
      number: 8,
      regInput: "abcdefg",
    },
    cdfbe: { number: 5, regInput: "abdfg" },
    gcdfa: { number: 2, regInput: "acdeg" },
    fbcad: { number: 3, regInput: "acdfg" },
    dab: { number: 7, regInput: "acf" },
    cefabd: { number: 9, regInput: "abcdfg" },
    cdfgeb: { number: 6, regInput: "abdefg" },
    eafb: { number: 4, regInput: "bcdf" },
    cagedb: { number: 0, regInput: "abcefg" },
    ab: { number: 1, regInput: "df" },
  };

  const permutations = {
    acedgfb: findPermutations("acedgfb"),
    cdfbe: findPermutations("cdfbe"),
    gcdfa: findPermutations("gcdfa"),
    fbcad: findPermutations("fbcad"),
    dab: findPermutations("dab"),
    cefabd: findPermutations("cefabd"),
    cdfgeb: findPermutations("cdfgeb"),
    eafb: findPermutations("eafb"),
    cagedb: findPermutations("cagedb"),
    ab: findPermutations("ab"),
  };
  console.log(decoding);

  let arr = data
    .toString()
    .replace(/\r\n/g, ",")
    .split("\n")
    .map((item) => item.split("|").pop().split(" ").splice(1, item.length));

  console.log(arr);

  //   arr.map((row) => {
  //     console.log(row);
  //     row.map((output) => {
  //       let activeKey;
  //       for (const key in decoding) {
  //         console.log(
  //           "regInput",
  //           decoding[key].regInput,
  //           "messed up input",
  //           output
  //         );

  //         //   console.log("before foor loop", key, output);
  //         if (decoding[key].regInput === output) {
  //           activeKey = key;
  //           return;
  //         }
  //       }

  //       console.log(output, activeKey);
  //     });
  //   });

  //   currString.length === 3 ||
  //     currString.length === 4 ||
  //     currString.length === 7 ||
  //     currString.length === 2;
  //7=3, 4=4, 8=7, 1=2

  const result = arr.map((row) => {
    console.log(row);
    return row
      .map((output) => {
        console.log("outout", output);
        if (output.length === 3) {
          return 7;
        } else if (output.length === 4) {
          return 4;
        } else if (output.length === 7) {
          return 8;
        } else if (output.length === 2) {
          return 1;
        } else {
          // let activeKey;
          for (const key in permutations) {
            console.log("before foor loop", key, output);
            if (key.length === output.length) {
              console.log(
                "checking words of same length",
                permutations[key].find((item) => {
                  console.log(item);
                  return item === output;
                })
              );
              if (permutations[key].find((item) => item === output)) {
                //     console.log(key);
                // activeKey = key;
                console.log(decoding[key].number, key);
                return decoding[key].number;
              }
            }
          }
          //return 0;
        }
      })
      .join(",");
  });
  // .reduce((sum, curr) => (sum += curr), 0);

  console.log(result);

  //   let result = arr.map((item) =>
  //     item.map((input) => {
  //       console.log(
  //         "finding keys",
  //         decoding[
  //           Object.entries(permutations).find(([key, value]) => {
  //             console.log(key, value);
  //             return value.includes(input);
  //           })
  //         ]
  //       );
  //       return decoding[
  //         Object.entries(permutations).find(([key, value]) => {
  //           console.log(key, value);
  //           console.log(input);

  //           return value.find((val) => {
  //             console.log(val === input, val, input);

  //             return String(val).valueOf() === String(input).valueOf();
  //           });
  //         })
  //       ];
  //     })
  //   );
  // .reduce((sum, curr) => (sum += curr.length), 0);
});

let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  }

  if (!!string.length && string.length <= 2) {
    return string.length === 2 ? [string, string[1] + string[0]] : [string];
  }

  return string
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          findPermutations(string.slice(0, i) + string.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );

  //   let permutationsArray = [];

  //   for (let i = 0; i < string.length; i++) {
  //     let char = string[i];

  //     if (string.indexOf(char) != i) continue;

  //     let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

  //     for (let permutation of findPermutations(remainder)) {
  //       permutationsArray.push(char + permutation);
  //     }
  //     console.log(permutationsArray);
  //     return permutationsArray;
};
