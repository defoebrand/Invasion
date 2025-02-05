const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(gif|png|jpe?g|svg|xml|m4a)$/i,
      use: 'file-loader',
    },
    ],
  },
  performance: {
    hints: false,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
