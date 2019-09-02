const path = require('path')

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },
};

module.exports = config;