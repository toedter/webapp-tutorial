var webpack = require('webpack');
var path = require('path');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

// Webpack Config
var webpackConfig = {
    entry: {
        'polyfills': './src/main/webapp/polyfills.ts',
        'vendor': './src/main/webapp/vendor.ts',
        'app': './src/main/webapp/app.ts'
    },

    output: {
        path: './dist',
    },

    plugins: [],

    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },

        ]
    }
};

// if we run the CommonsChunkPlugin in karma test, we get a ReferenceError: Can't find variable: webpackJsonp
if (!isTest) {
  webpackConfig.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'], minChunks: Infinity })
  )
}

// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.join(__dirname, '../../node_modules', 'rxjs'),
                    path.join(__dirname, '../../node_modules', '@angular2-material'),
                    path.join(__dirname, '../../node_modules', '@angular'),
                ]
            }
        ],
        noParse: [
            path.join(__dirname, '../../node_modules', 'zone.js', 'dist'),
            path.join(__dirname, '../../node_modules', 'angular2', 'bundles')
        ]
    },

    resolve: {
        root: [ path.join(__dirname, 'src/main/webapp') ],
        extensions: ['', '.ts', '.js', '.json']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);