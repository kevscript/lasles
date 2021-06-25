const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const plugins = require("./webpack.plugins");
const loaders = require("./webpack.loaders");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  target: "web",
  entry: "./src/js/index.js",
  module: {
    rules: loaders,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  plugins,
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: "source-map",
};
