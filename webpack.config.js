const path = require('path');
const entryFile = path.resolve(__dirname, 'client', 'src', 'index.js');
const outputDir = path.resolve(__dirname, 'client', 'dist');

const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', entryFile],
  output: {
    publicPath:"/",
    filename: 'bundle.js',
    path: outputDir
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './client/dist',
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
      '/auth': 'http://localhost:3000',
      '/logout': 'http://localhost:3000',
      '/login': 'http://localhost:3000',
      '/u/profile': 'http://localhost:3000',
      '/song': 'http://localhost:3000',
      '/album': 'http://localhost:3000',
      '/artist': 'http://localhost:3000',
      '/error': 'http://localhost:3000',
      '/': 'http://localhost:3000',
      '/socket.io': 'http://localhost:3000'
    }
  }
};