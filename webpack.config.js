/**
 * Created by zhang-j on 2016/3/23.
 */
var path = require('path');
module.exports = {
    entry: {'index':'./public/js/index.js'},
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: '[name].js',
        publicPath: '/dist/js/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
};
