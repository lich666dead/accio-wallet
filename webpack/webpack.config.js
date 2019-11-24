const webpack = require('webpack')
const path = require('path')
const development = 'development'
const mode = process.env.NODE_ENV || development

module.exports = {
  entry: path.resolve(__dirname, '../extension/background.js'),
  devtool: 'source-map',
  target: 'web',
  watch: mode === development,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['./node_modules']
  },
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, '../dist/extension')
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(mode)
    })
  ],
  mode
}
