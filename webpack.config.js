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
        query: {
          presets: [
            'babel-preset-es2015', 
            'babel-preset-react',
            'babel-preset-stage-0'
          ].map(require.resolve),
          plugins: [
            'babel-plugin-transform-runtime',
            'babel-plugin-transform-class-properties',
            'babel-plugin-syntax-decorators',
            'babel-plugin-transform-decorators-legacy'
          ].map(require.resolve)
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
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