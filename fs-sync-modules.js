// Fs allows us to interact with the modules
// Syncronus method.
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// / writeFileSync creates the path
writeFileSync(
  "content/result-sync.text",
  `  here is the result: ${first}, ${second}`,
  { flag: "a" }
);
