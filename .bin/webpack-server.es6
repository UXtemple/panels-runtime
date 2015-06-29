#!/usr/bin/env babel-node

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

new WebpackDevServer(webpack(config), {
  contentBase: './playground',
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', err => {
  if (err) {
    console.log(err);
  }

  console.log('Webpack listening at localhost:3001');
});
