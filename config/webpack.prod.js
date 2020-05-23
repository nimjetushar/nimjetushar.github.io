const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  path = require("path"),
  basePath = process.cwd(),
  rootDir = path.resolve(basePath, "./"),
  cleanUpList = [path.resolve(basePath, 'dist'), path.resolve(basePath, 'index.html')];

module.exports = mode => {
  return webpackMerge(commonConfig(mode), {
    mode: 'production',
    output: {
      path: path.resolve(rootDir, "dist"),
      publicPath: "./dist/",
      filename: "[name].[hash].js",
      chunkFilename: "[id].chunk.[hash].js"
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: cleanUpList
      }),
      new OptimizeCSSAssetsPlugin({}),
      new WorkboxPlugin.GenerateSW({
        swDest: path.resolve(basePath, 'sw.js'),
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 2 * 1024 * 1024,
        exclude: [/\.html$/]
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    }
  });
}