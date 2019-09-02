const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = {
  mode: 'development',
  // mode: 'production',
  entry: {
    app: './src/app.js',
    app2: './src/app2.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        modules: {
          chunks: 'initial',
          test: /module\d.js$/,
          name: 'all',
          minSize: 0,
        }
      }
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      inlineSource: 'runtime.bundle.js$'
    }),
    new htmlWebpackInlineSourcePlugin(),
    new BundleAnalyzerPlugin,
  ],
};

module.exports = config;