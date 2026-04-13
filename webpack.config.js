const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tsRule = {
    test: /\.tsx?$/,
    use: {
        loader: 'ts-loader',
        options: { transpileOnly: true }
    },
    exclude: /node_modules/
};

const cssRule = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
};

const resolve = {
    extensions: ['.ts', '.js']
};

const libConfig = {
    name: 'lib',
    mode: 'production',
    entry: ['./src/style.css', './src/index.ts'],
    externals: {
        'mapbox-gl': {
            commonjs: 'mapbox-gl',
            commonjs2: 'mapbox-gl',
            amd: 'mapbox-gl',
            root: 'mapboxgl'
        }
    },
    module: {
        rules: [tsRule, cssRule]
    },
    resolve,
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style-switcher.css' })
    ],
    output: {
        filename: 'style-switcher.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'StyleSwitcherControl',
            type: 'umd',
            export: 'default'
        },
        globalObject: 'this',
        clean: true
    }
};

const demoConfig = {
    name: 'demo',
    mode: 'development',
    entry: './demo/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [tsRule, cssRule]
    },
    resolve,
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Mapbox GL JS Draw Style Switcher'
        })
    ],
    output: {
        filename: 'demo.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = [libConfig, demoConfig];
