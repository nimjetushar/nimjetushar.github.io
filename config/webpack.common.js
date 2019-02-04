const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  path = require('path'),
  basePath = process.cwd(),
  cleanUpList = [path.resolve(basePath, 'dist'), path.resolve(basePath, 'index.html')];

function fileLoaderOpt(type) {
  return {
    name: '[name].[ext]',
    publicPath: type,
    outputPath: type
  }
}

module.exports = mode => {
  return {
    entry: {
      polyfills: './src/polyfills.js',
      app: './src/index.js',
      styles: './src/styles.scss'
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          !mode ?
            'style-loader' :
            MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOpt('font'),
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOpt('image'),
          }
        ]
      }]
    },

    plugins: [
      new CleanWebpackPlugin([...cleanUpList], { allowExternal: true }),
      new HtmlWebpackPlugin({
        template: './public/index.html', // Input FileName
        filename: mode ? '../index.html' : './index.html'// Output FileName
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ],

    optimization: {
      splitChunks: {
        chunks: 'all',
        maxAsyncRequests: 5,
        minChunks: 1
      },
      mergeDuplicateChunks: true
    }
  }
};