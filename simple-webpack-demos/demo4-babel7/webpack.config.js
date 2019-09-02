const path = require('path')

const config = {
  // mode: 'development',
  mode: 'production',
  entry: {
    src: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      }
    ]
  },
};

module.exports = config;