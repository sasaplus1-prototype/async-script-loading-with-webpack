'use strict';

const path = require('path');

const webpack = require('webpack');

module.exports = function(env) {
  return {
    entry: {
      'index': path.join(__dirname, '/src/index.js'),
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      path: path.normalize(__dirname),
    },
  };
};
