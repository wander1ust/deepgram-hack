var path = require('path');
let webpack = require("webpack");
const json = require('./src/data/economics.json');

module.exports = {
    entry: {
        javascript: "./src/App.js",
        html: "./index.html"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [{
            test: /\.jsx?$/, /\.scss$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel',
                options: { presets: ['@babel/env','@babel/preset-react'] },
                require.resolve('sass-loader')
            }
        }]
    },
};
