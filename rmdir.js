const fs = require("fs");

fs.rmdir("./nuevo", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Borrado");
});

console.log("Borrando directorio...");
