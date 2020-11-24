const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
