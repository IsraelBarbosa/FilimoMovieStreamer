const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/js/index/index.js",
    output: {
        filename: "src/js/[name]-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'src/css/[name]-[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /main\.s[ac]ss$/i,
                use: [
                    // extracts CSS into separate files
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: !isDevelopment
                            },
                            pngquant: {
                                quality: [0.25, 0.50],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            CssFolder: path.resolve(__dirname, 'src/sass/'),
            ImgFolder: path.resolve(__dirname, 'src/'),
            VideoFolder: path.resolve(__dirname, 'src/video/'),
        }
    }
}