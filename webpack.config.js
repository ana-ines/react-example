var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  resolve: {     
    alias: { 
      config: path.join(__dirname, 'config') 
    },
    extensions: ['.js', '.jsx']   
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};