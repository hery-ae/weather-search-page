const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: './pages/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather Search Page',
            favicon: './public/favicon.ico',
            chunks: ['index'],
            filename: 'index.html'
        })
    ],
    mode: 'production'
}
