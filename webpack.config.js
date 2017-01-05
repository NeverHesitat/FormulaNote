const { resolve } = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const env = 'development';

module.exports = {

    entry: {
        "zjb.formulaNote": resolve(__dirname, 'src/main.js'),
        "index": resolve(__dirname, 'test/index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        // 定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
        extensions: ['.js', '.json', '.vue'],

        // 配置查找模块的基路径
        modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],

        // 使用别名做重定向:
        // 通过key，value的形式，将模块名和路径对应起来，不管是相对路径还是绝对路径，
        // 因此，在模块引用的时候，利用require引用的模块可以不用通过相对路径或者绝对路径的方式，而是直接通过require('模块名')的方式进行引用
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    },

    // Node.js Express服务器
    devServer: {
        port: 3000,
        host: 'localhost',
        // historyApiFallback: true,
        compress: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    // 调试工具
    devtool: 'inline-source-map',

    // 定义了对模块的处理逻辑，用loaders定义了一系列的加载器
    // 当需要加载的文件匹配test的正则表达式时，就会调用后面的loader对文件进行处理
    // 这些loader需要通过npm install安装
    module: {
        rules: [
            // .scss文件使用'style-loader','raw-loader', 'postcss-loader','sass-loader'加载器来编译处理
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader?singleton',
                    'style-loader',
                    'raw-loader',
                    // 'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // .js文件使用'babel-loader'加载器来编译处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
                },
            {
                test: /\.vue$/,

                // 排除/node_modules/下的.vue文件
                exclude: /node_modules/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            sass: 'style-loader!raw-loader!postcss-loader!sass-loader'
                        }
                    }
                }]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.html$/,
                use: ['raw-loader'],
                exclude: resolve(__dirname, 'test/index.html')
            },
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },

    // 这里定义了需要使用的插件: 内置插件
    plugins: [
        // 允许错误不打断程序
        new webpack.NoErrorsPlugin(),

        // 接收字符串插入到代码当中
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(env),
            'HMR': true,
            'process.env': {
                'ENV': JSON.stringify(env),
                'NODE_ENV': JSON.stringify(env),
                'HMR': true,
            }
        }),

        // 删除编译资源, 在编译前，删除之前编译结果目录或文件
        new CleanPlugin(['dist']),

        // 在生成代码时生成一个 json 文件，其中包含了源文件和打包结果的对应关系, 开发时让后端代码读取这个 json 文件，获取最新的目标文件名
        new AssetsPlugin({
            path: resolve(__dirname, 'dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
        }),

        // 拷贝资源插件: 在webpack中拷贝文件和文件夹
        new CopyPlugin([
            // 把src/assets下的文件拷贝到assets
            {
                from: 'src/assets',
                to: 'assets',
                ignore: ['favicon.ico']
            },
            // 把jquery-3.1.1.min.js下的文件拷贝到编译目录
            { from:'jquery-3.1.1.min.js' }
        ]),

        // 自动生成html的插件: 它会在dist(output中配置)目录下自动生成一个index.html
        new HtmlPlugin({
            // 要使用的模块的路径
            template: './test/index.html',

            // favicon: './src/assets/favicon.ico',
            inject: true,
        })
    ],

};
