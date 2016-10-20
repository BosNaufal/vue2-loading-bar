
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  devtool: '#source-map',

  entry: './src/js/components/',

  output: {
    path: __dirname + '/build',
    publicPath: './build/',
    filename: 'vue2-loading-bar.js',
    library: 'LoadingBar',
    libraryTarget: 'umd'
  },

  externals: {
    "Vue": "vue"
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

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]

};
