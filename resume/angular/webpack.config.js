module.exports = require('./config/webpack.dev.js');
plugins: [
    new webpack.optimize.UglifyJsPlugin()
]
entry: {
    'app': './src/main.ts'
}
output: {
    filename: 'app.js'
}
