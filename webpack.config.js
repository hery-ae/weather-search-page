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
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: {
                                    tailwindcss: {
                                        content: [
                                            './pages/**/*.js',
                                            './components/**/*.js'
                                          ],
                                          theme: {
                                            extend: {}
                                          },
                                          plugins: []
                                    },
                                    autoprefixer: {}
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    mode: 'production'
}
