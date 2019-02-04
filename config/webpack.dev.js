const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  path = require("path"),
  basePath = process.cwd(),
  rootDir = path.resolve(basePath, "./"),
  packageJson = require('../package.json'),
  port = packageJson.buildconfig.port;

module.exports = (mode) => {
  return webpackMerge(commonConfig(mode), {
    devtool: "cheap-module-eval-source-map",
    mode: 'development',

    output: {
      path: path.resolve(rootDir, "dist"),
      publicPath: `http://localhost:${port}/`,
      filename: "[name].js",
      chunkFilename: "[id].chunk.js"
    },

    devServer: {
      inline: true,
      port: port,
      historyApiFallback: true,
      stats: "minimal"
    }
  });
}