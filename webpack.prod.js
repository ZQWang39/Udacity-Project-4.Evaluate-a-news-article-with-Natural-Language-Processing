const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
    entry: './src/client/index.js',
    output:{
        libraryTarget:'var',
        library: 'Client',
        path: path.resolve(__dirname, "dist")
    },
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg)$/i,
                use: [{
                  loader:"file-loader",// "url-loader"
                  options:{
                    //limit:10*1024,
                    name:"[hash:6].[ext]",
                    outputPath:"assets/img",
                    publicPath:"./assets/img"
                  }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({ 
            filename: "[name].css",
        }),
        new WorkboxPlugin.GenerateSW(),
        new FaviconsWebpackPlugin({
            logo: './src/client/img/logo.png',
            mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
            devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
            favicons: {
              appName: 'my-app',
              appDescription: 'My awesome App',
              developerName: 'Me',
              developerURL: null, // prevent retrieving from the nearest package.json
              background: '#ddd',
              theme_color: '#333',
              icons: {
                coast: false,
                yandex: false
              }
            }
          })
    ]
}
