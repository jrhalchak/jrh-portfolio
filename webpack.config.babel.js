import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Promise from 'es6-promise';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import AutoPrefixer from 'autoprefixer';
import Path from 'path';

if (global.Promise === null) {
    global.Promise = Promise;
}

export default {
    entry: {
        layout: ['layout.js', 'styles.sass'],
        entries: ['entries.js']
    },
    output: {
        path: __dirname + '/public/',
        filename: '[name]_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                presets: ['es2015', 'react'],
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap=true&sourceMapContents=true')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/main/stylesheets/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./styles_bundle.css'),
        new LiveReloadPlugin(),
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            spinner: 'spinner'
        })*/
    ],
    postcss: ()=> [
        AutoPrefixer({
            remove: false,
            browsers: ['ie > 9']
        })
    ],
    resolve: {
        root: [
            // add glob someday
            Path.resolve('./public/main/javascripts/shared'),
            Path.resolve('./public/main/javascripts/entries'),
            Path.resolve('./public/main/javascripts/shared/modules'),
            Path.resolve('./public/main/javascripts/entries/modules'),
            Path.resolve('./public/main/')
        ],
        // "import 'file'" instead of "import 'file.js'"
        modulesDirectories: ['node_modules','./public/main/javascripts/shared','./public/main/javascripts/entries/modules','./public/main/stylesheets'],
        extensions: ['', '.js', '.scss']
    }
};
