const path = require('path');

const vendors = ['react', 'react-dom'];
const clientFolder = path.join(__dirname, 'client');

module.exports = {
  entry: {
    bundle: path.join(clientFolder, 'app.js'),
    vendor: vendors,
  },
  module: {
    loaders: [
      {
        test: clientFolder,
        loader: 'babel-loader',
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/javascripts'),
  },
  devServer: {
    contentBase: '/javascripts/',
    compress: true,
    port: 9000,
  },
};
