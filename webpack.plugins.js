const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// Extract CSS separately from bjs bundle
const miniCssExtractPlugin = new MiniCssExtractPlugin()

// Generate HTML file based on a template
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: path.join(__dirname, "src/index.html"),
})

// Cleans Dist folder between rebuilds
const cleanWebpackPlugin = new CleanWebpackPlugin()

let plugins = [
  cleanWebpackPlugin,
  htmlWebpackPlugin,
  miniCssExtractPlugin,
]

module.exports = [...plugins]