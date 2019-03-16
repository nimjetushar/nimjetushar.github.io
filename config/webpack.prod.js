const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  path = require("path"),
  basePath = process.cwd(),
  rootDir = path.resolve(basePath, "./"),
  packageJson = require("../package.json"),
  cleanUpList = [path.resolve(basePath, 'dist'), path.resolve(basePath, 'index.html')];

module.exports = mode => {
  return webpackMerge(commonConfig(mode), {
    mode: 'production',
    output: {
      path: path.resolve(rootDir, "dist"),
      publicPath: "./dist",
      filename: "[name].[hash].js",
      chunkFilename: "[id].chunk.[hash].js"
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: cleanUpList
      }),
      new OptimizeCSSAssetsPlugin({}),
      new SWPrecacheWebpackPlugin({
        cacheId: packageJson.name,
        filename: 'service-workers.js',
        staticFileGlobs: [
          ...packageJson.buildconfig.filecache
        ],
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobsIgnorePatterns: [/\.json/, /\.map/, /\.xml/]
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