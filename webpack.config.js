const path = require("path");

module.exports = {
  entry: {
    // main: path.resolve(__dirname, "./src/main.js"),
    script: path.resolve(__dirname, "./src/script.js"),
    // preload: path.resolve(__dirname, "./src/preload.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build/"),
  },
};
