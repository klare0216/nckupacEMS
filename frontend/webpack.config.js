
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/js/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(pdf|jpg|gif|png|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/src/js`,
    filename: 'index_bundle.js',
    inline: true,
    port: 8008,
  },
  watchOptions: {
    poll: true
  },
  mode: 'development',
  plugins: [HtmlWebpackPluginConfig],
}