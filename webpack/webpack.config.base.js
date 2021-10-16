const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, "../src/index.ts"),
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, "../dist"),
    // 出力ファイル名
    filename: "bundle.js",
  },
  /** https://qiita.com/YoshinoriKanno/items/322ae6e53daa35059c15 */
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"],
    // Webpackで利用するときの設定
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //     filename: "index.html",
  //   }),
  // ],
};

module.exports = config;
