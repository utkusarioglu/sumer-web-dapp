require("dotenv").config();
const TsConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const DotEnvWebpack = require("dotenv-webpack");
const {
  SourceMapDevToolPlugin,
  HotModuleReplacementPlugin,
  ProvidePlugin,
} = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "build"),
    clean: true,
    sourceMapFilename: "[name].[contenthash].js.map",
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  devServer: {
    open: false,
    client: {
      overlay: false,
    },
    port: process.env.PORT || 3000,
  },

  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    plugins: [new TsConfigPathsWebpackPlugin.TsconfigPathsPlugin()],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "sumer",
      template: path.join(__dirname, "public", "index.html"),
    }),
    new DotEnvWebpack(),
    new SourceMapDevToolPlugin({}),
    // required by walletconnect v1
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
