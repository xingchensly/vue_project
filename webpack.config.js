var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/js/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.vue$/,use:['vue-loader'],exclude:/node_modules/},
            {test:/\.(jpg|png|gif|bmp)$/,use:['url-loader']},
            {test:/\.(ttf|woff|woff2|eot|svg)$/,use:['url-loader']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}