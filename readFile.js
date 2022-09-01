const fs = require("fs");
const path = require("path");

let ls = path.join(__dirname, "readdir.js");
fs.readFile(ls, "utf-8", (error, texto) => {
  if (error) {
    return console.log(error);
  }
  console.log(texto);
});

console.log("Leyendo archivo...");
