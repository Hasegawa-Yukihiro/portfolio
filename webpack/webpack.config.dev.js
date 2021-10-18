const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/**
 * 環境変数の設定
 * @param DOMAIN ドメイン
 * @param NODE_ENV 環境名
 */

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    static: "dist",
    open: true,
    port: 8080,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true,
  },
  plugins: [
    /** 環境変数の追加 */
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("development"),
        },
      },
    }),
  ],
});

module.exports = config;
