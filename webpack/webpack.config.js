
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  devtool: '#eval-source-map',

  entry: './src/js/main.js',

  output: {
    path: __dirname + '/build',
    publicPath: 'build/',
  },

  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015"],
          plugins: ["transform-object-rest-spread","transform-vue-jsx"]
        }
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
      },

    ]
  },

};
