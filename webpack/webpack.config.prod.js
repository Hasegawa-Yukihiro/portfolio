const path = require("path");
const baseConfig = require("./webpack.config.base.js");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/**
 * @description 環境変数の設定
 * @param NODE_ENV 環境名
 */
const env = {
  NODE_ENV: JSON.stringify("production"),
  AUTH_URL: JSON.stringify(process.env.AUTH_URL),
  API_URL: JSON.stringify(process.env.API_URL),
};

const config = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  plugins: [
    /** 環境変数の追加 */
    new webpack.DefinePlugin({
      process: { env },
    }),
  ],
});

module.exports = config;
