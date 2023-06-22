const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public", "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
