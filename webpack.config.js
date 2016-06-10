const webpack              = require('webpack');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: {
          presets: [
            'es2015', 
            'react'
          ],
          plugins: [
            'transform-runtime'
          ]
        }
      },
      { 
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'url-loader?limit=1000000'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: false
    })
  ]
};