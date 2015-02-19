var webpack = require('webpack');
var production = process.env.NODE_ENV == 'production'
var outputPrefix = 'qblog-category-sort';

var options = {
  entry: './index.js',
  output: {
    path: '.',
    filename: outputPrefix + '.js'
  },
  externals: {
    "jquery": "jQuery"
  }
}

if (production) {
  options.output.filename = outputPrefix + '.min.js'
  options.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = options;
