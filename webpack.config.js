var path = require('path')
var Dotenv = require('dotenv-webpack')

module.exports = {

    entry: path.resolve(__dirname, 'src', 'js', 'App.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    devtool: false,
    module: {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                use : [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            }
        ]
    },
    plugins: [
        new Dotenv()
    ],
    devServer : {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath : '/dist',
        compress: true,
        historyApiFallback: true   
    }

}