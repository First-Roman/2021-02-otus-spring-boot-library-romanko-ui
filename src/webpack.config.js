const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "mainStore.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            }]
    },
    devServer: {
        // contentBase: path.join(__dirname ),
        index: "/public/index.html",
        compress: true,
        port: 9000,
        host: 'localhost',
        open: false,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: false
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '/public/index.html'
        }),
        new ExtractTextPlugin({filename: 'style.css'})
    ]
};