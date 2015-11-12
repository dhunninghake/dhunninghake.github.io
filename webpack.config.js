

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = ['/'];
var data = require('./src/data');

module.exports = {
  
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        exclude: /colors\.css/,
        loaders: ['css-loader', 'cssnext-loader']
      },
      { 
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'url-loader?limit=1000000'
      },
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', paths, data)
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

};

