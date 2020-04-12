const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js", // 打包的入口文件
    mode: "development",
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}