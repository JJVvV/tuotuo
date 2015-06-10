var path = require('path');
var webpack = require('webpack');
console.log('***********************');
console.log(path.join(__dirname, 'src'));
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'), //这是启用打包后生成的文件地址
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src') //需要loader来处理的文件入口
    }]
  },
    debug:true
};
