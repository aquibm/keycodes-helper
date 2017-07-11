const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV || 'dev'

module.exports = {
    entry: './src/js',
    output: {
        filename: 'chunk.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Keycode Helper',
            template: './src/index.ejs'
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: env === 'prod'
                    ? ExtractTextPlugin.extract({
                          fallback: 'style-loader',
                          use: 'css-loader'
                      })
                    : ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}
