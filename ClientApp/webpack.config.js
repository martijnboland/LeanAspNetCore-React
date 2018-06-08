const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  
  const isProd = argv.mode === 'production';

  const config = {
    entry: './src/main.js',
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
        template: path.resolve(__dirname, '../Pages/Shared/_Layout.template.cshtml'),
        inject: true
      })
    ],
    module:  {
      rules: [
        {
          test: /\.css$/,
          use: [ 
            //isProd ?  MiniCssExtractPlugin.loader : 'style-loader', 
            MiniCssExtractPlugin.loader, 
            'css-loader' 
          ]
        }
      ]
    }
  }
  
  return config;
};