const fs = require("fs");

const existe = fs.existsSync("nuevo");

if (!existe) {
  fs.mkdir("./nuevo", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Creado!");
  });
  console.log("Creando directorio...");
}
