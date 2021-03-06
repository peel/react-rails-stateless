var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "production": JSON.stringify("production")
        }
    })
);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = config;
