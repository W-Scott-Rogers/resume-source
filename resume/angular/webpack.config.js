plugins: [
    new webpack.optimize.UglifyJsPlugin()
]
entry: {
    'app': './src/main.ts'
}
output: {
    filename: 'app.js'
}
