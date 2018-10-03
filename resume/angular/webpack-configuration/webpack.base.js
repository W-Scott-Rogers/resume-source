const {AngularCompilerPlugin}    = require('@ngtools/webpack');
const path         = require('path');
const webpack      = require('webpack');

// function resolve(dir) {
//     let resolvedDir = path.join(__dirname, '..', dir);
//     console.log(resolvedDir);
//     return resolvedDir;
// }

// console.log(path.resolve(__dirname, '../src/main.ts'));
// console.log(path.resolve(__dirname, '../../../resume-site'));
// console.log(path.resolve(__dirname, '../src/tsconfig.app.json'));
// console.log(path.resolve(__dirname, '../src/app/resume.module#ResumeModule'));

const config = {
    entry: {
        resume: path.resolve(__dirname, '../src/main.ts')
    },

    resolve: {
        mainFields: [
            'browser',
            'module',
            'main'
        ]
    },

    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [
                /node_modules/
            ],
            loaders: [
                '@ngtools/webpack',
                'ts-loader'
            ]
        },{
            test: /\.js$/,
            exclude: [
                /node_modules/
            ],
            loader: '@angular-devkit/build-optimizer/webpack-loader',
            options: {
                sourceMap: false
            }
        },{
            test: /\.html$/,
            exclude: [
                /node_modules/
            ],
            loader: "html-loader?exportAsEs5Default"
        },{
            test: /(\.css|\.scss)$/,
            exclude: [
                /node_modules/
            ],
            use: [
                'style-loader',
                'css-loader?url=false'
            ]
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: [
                /node_modules/
            ],
            loader: 'img-loader'
        },{
            test: /\.(woff(2)?|ttf|eot|svg|ico|gif)(\?v=\d+\.\d+\.\d+)?$/,
            exclude: [
                /node_modules/
            ],
            loader: 'file-loader'
        },{
            test: /\.yml$/,
            exclude: [
                /node_modules/
            ],
            loader: 'yaml',
        }]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },

    output: {
        path: path.resolve(__dirname, '../../../resume-site'),
        filename: '[name].bundle.js',
        globalObject: `typeof self !== 'undefined' ? self : this`
    },

    plugins: [
        new AngularCompilerPlugin({
            skipCodeGeneration: false,
            tsConfigPath: path.resolve(__dirname, '../src/tsconfig.app.json'),
            hostReplacementPaths: {
                './src/environments/environment.ts': './src/environments/environment.prod.ts'
            },
            entryModule: path.resolve(__dirname, '../src/app/resume.module#ResumeModule')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],

    externals: {
        'rxjs':                      'rxjs',
        '@angular/core':             'ng.core',
        '@angular/common':           'ng.common',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/elements':         'ng.elements'
    }
};

module.exports = [config];
