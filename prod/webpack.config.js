var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          'style-loader', // style-loader - takes css modules and stick them in style tag in html file
         'css-loader' // css-loader - for reading content of css files
        ],
        test:  /\.css$/
      }
    ]
  }
};
