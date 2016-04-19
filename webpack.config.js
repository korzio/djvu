var webpack = require("webpack");

module.exports = {
    entry: ['./lib/index.js'],
    target: 'node',
    output: {
        library: 'djvu',
        libraryTarget: 'umd',
        filename: 'djvu.js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};