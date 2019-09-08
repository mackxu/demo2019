const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[id].[name].bundle.js',
    chunkFilename: '[id].[name].chunk.js'
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [MiniCssExtractPlugin.loader, 'css-loader'],
  		}
  	]
  },
  optimization: {
  	runtimeChunk: 'single',
  	splitChunks: {
  		cacheGroups: {
  			async: {
          name: 'async',
          // test: /\.js$/,
          // enforce: true,
          chunks: 'async',
          minChunks: 1,
          minSize: 0
        },
  			vendors: {
          test: /[\\/]vendor[\\/].*\.js$/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 1,
          minSize: 0
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          // enforce: true,
          minChunks: 1,
          minSize: 0
        },
  		}
  	}
  },
  plugins: [
  	new MiniCssExtractPlugin({
  		filename: '[id].[name].[chunkhash:8].css',
  		chunkFilename: '[id].[name].[chunkhash:8].css',
  	})
  ]
};

module.exports = config;