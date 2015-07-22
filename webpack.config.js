var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: './app/index',
  output: {
    publicPath: '/public/',
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  // resolve: {
  //   root: [path.resolve(__dirname, 'node_modules/riot/lib/server'), path.resolve(__dirname, 'app')],
  //   modulesDirectories: ['web_modules', 'node_modules']
  // },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".tag", ".htm", ".coffee"]
  },
  module: {

    preLoaders: [
      { test: /\.tag/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none'} }
    ],
    loaders: [
      { test: /\.js|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.coffee$/, exclude: /node_modules/, loader: 'coffee-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.css/, exclude: /node_modules/, loader: 'style-loader!css-loader' }
    ]
  },
  // node: {
  //   fs: "empty"
  // },
};
