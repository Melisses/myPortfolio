const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: !isDev,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './img/diamond-2.png',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        })
    ],
    module: {
        rules: [
        // {
        //     test: /\.css$/,
        //     use:[MiniCssExtractPlugin.loader, 'css-loader']
        // },
        {
            test: /\.s[ac]ss$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|jpeg|svg|gif)$/,
            use:['file-loader']
        },
        {
            test: /\.(html)$/,
            use: ['html-loader']
         }
        ]
    }
}