const path = require('path')

const config = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
};

module.exports = config;