const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const styleLoaders = {
  test: /\.(scss|css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ],
};

const jsLoaders = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const imageLoaders = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: "file-loader",
  options: {
    name: "/assets/[name].[ext]",
  },
};

const fontLoaders = {
  test: /\.(eot|ttf|woff|woff2)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "assets/fonts/[name].[ext]",
    },
  },
};

module.exports = [styleLoaders, jsLoaders, imageLoaders, fontLoaders];
