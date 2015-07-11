import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './playground/playground.es6'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'playground.js',
    publicPath: 'http://localhost:3001/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  module: {
    loaders: [{
      test: /\.es6$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules|blocks|react-animation|ui/
    }, {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: /react-animation/
    }, {
      test: /\.es6$/,
      loaders: ['babel'],
      include: /blocks|ui/
    }]
  }
};
