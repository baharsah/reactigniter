const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './app/Interfaces/index.js',
    output : {
        path : __dirname + "public"
    },
    module: {
        rules: [
    
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // Second Rule
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localsConvention: 'camelCase',
                  sourceMap: true
                }
              }
            ]
          }
        ]
      }, plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          favicon: 'public/favicon.ico'
        })
      ],
      devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
    
};