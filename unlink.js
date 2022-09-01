const fs = require("fs");

fs.unlink("./nuevo/texto-de-js.js", (error) => {
  if (error) {
    return console.log(erorr);
  }
  console.log("Borrado!");
});

console.log("Borrando...");
