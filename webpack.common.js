const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const webpack = require('webpack');
const dotenv = require('dotenv');

const HtmlWebpackInjectPlugin = require('html-webpack-inject-plugin').default;


module.exports = {


    entry: {
        popup: path.resolve("./src/popup/index.tsx"),
        auth: path.resolve("./src/popup/authIndex.tsx"),
        plan: path.resolve("./src/popup/planIndex.tsx"),
        options: path.resolve("./src/options/options.tsx"),
        background: path.resolve("./src/background/background.tsx"),
        content: path.resolve("./src/content/index.tsx"),


        tab: path.resolve("./src/tab/index.tsx"),
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx?$/, // 匹配.ts和.tsx文件
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            indent: 'postcss',
                            plugins: [tailwindcss, autoprefixer],
                        },
                    }
                }],
                test: /\.css$/,
            },
            {
                type: 'assets/images',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

        ]

    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve('src/manifest.json'), to: path.resolve('dist') },
                { from: path.resolve('src/assets/'), to: path.resolve('dist/assets/') },
                { from: path.resolve('src/js/'), to: path.resolve('dist/') },


            ],
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        }),
        ...getHtmlPlugins([
            'popup',
            'auth',
            'plan',
            'options',
            'tab'
        ]),
        new HtmlWebpackInjectPlugin({
            externals: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'src/firebase-app.js',
                        type: 'text/javascript'
                    }
                }
            ]
        })

    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        clean: true,
        filename: "[name].js"

    },
    optimization: {
        splitChunks: {
            // chunks: 'all',
            chunks(chunk) {
                return chunk.name !== 'content';
            }
        }

    }
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}