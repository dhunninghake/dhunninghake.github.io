const webpack              = require('webpack');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      { 
        test: /\.css$/, 
        exclude: /\.useable\.css$/, 
        loader: "style!css" 
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