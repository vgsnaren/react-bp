const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './views/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './views/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: "style-loader!css-loader!postcss-loader!less-loader", exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|webp|mp3|ogg|woff|woff2|ttf|svg|eot)$/,
        exclude: [/node_modules/],
        use: 'file-loader?name=[path][name].[hash:8].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}