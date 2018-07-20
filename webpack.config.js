const path = require('path');

module.exports = {
    entry: './src/playground/redux-101.js',
    'output': {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' //podemos poner cualquier nombre
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }] //en rules dice que use babel-loader cada vez que un archivo termine en .js pero no esté en node_modules
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true

    }
};

