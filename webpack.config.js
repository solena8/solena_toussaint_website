const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    navbar: "./src/navbar.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".scss", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./styles/index.scss"),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../public/index.css",
    }),
  ],
  mode: "production",
};
