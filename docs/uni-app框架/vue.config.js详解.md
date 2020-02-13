`vue.config.js`是一个可选的配置文件。

自定义静态资源目录

    const path = require('path')
    const CopyWebpackPlugin = require('copy-webpack-plugin')

    module.exports = {
        configureWebpack: {
            plugins: [
                new CopyWebpackPlugin([
                    {
                        from: path.join(__dirname, 'src/images'),
                        to: path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'images')
                    }
                ])
            ]
        }
    }

注入全局依赖

    const webpack = require('webpack')

    module.exports = {
        configureWebpack: {
            plugins: [
                new webpack.ProvidePlugin({
                    'localStorage': ['mp-storage', 'localStorage'],
                    'window.localStorage': ['mp-storage', 'localStorage']
                })
            ]
        }
    }

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/