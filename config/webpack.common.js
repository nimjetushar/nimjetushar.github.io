/* eslint-disable sort-keys */
const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

function fileLoaderOpt(type) {
  return {
    name: '[name].[ext]',
    publicPath: type,
    outputPath: type
  };
}

module.exports = mode => {
  return {
    entry: {
      polyfills: './src/polyfills.js',
      app: './src/index.js',
      styles: './src/styles.scss'
    },

    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [{
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve('babel.config.js')
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
        use: [!mode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOpt('font')
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOpt('image')
          }
        ]
      }]
    },

    plugins: [
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
  };
};
