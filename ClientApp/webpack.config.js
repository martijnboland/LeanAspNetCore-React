const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => {
  
  const isProd = argv.mode === 'production';

  const config = {
    mode: argv.mode || 'development', // we default to development when no mode option is passes
    entry: {
      main: './js/main.js'
    }, 
    output: {
      filename: isProd ? '[name].[hash].js' : '[name].js',
      path: path.resolve(__dirname, '../wwwroot/dist'),
      publicPath: "~/dist/"
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css'
      }),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../Pages/Shared/_Layout.cshtml'),
        template: path.resolve(__dirname, '../Pages/Shared/_Layout.template.cshtml')
      })
    ],
    module:  {
      rules: [
        {
          test: /\.css$/,
          use: [ 
            isProd ?  MiniCssExtractPlugin.loader : 'style-loader', 
            'css-loader' 
          ]
        }
      ]
    }
  }
  
  return config;
};