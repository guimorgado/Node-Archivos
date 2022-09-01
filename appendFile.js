const fs = require("fs");

fs.appendFile("./texto.txt", "Nueva linea\n", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Guardado");
});

console.log("Guardando");
