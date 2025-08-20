const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
     experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
             {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
                { from: "src/css/main.css", to: "css" }
            ]
        }),
    ],
};