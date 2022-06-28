const path = require("path");

module.exports = {
  // Punto de entrada del proyecto
  entry: "./src/index.js",
  // Punto de salida del proyecto
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
