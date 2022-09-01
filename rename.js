const fs = require("fs");

fs.rename("./texto.txt", "./texto-de-js.js", (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Renombrando!");
});

console.log("Renombrando...");
