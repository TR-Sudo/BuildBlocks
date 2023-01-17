const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let mode="development";
let target="web";
if(process.env.NODE_ENV==="production"){
    mode="production";
}
module.exports={
    mode:mode,
    target:target,
    output:{
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename:"images/[hash][ext][query]"
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif)$/i,
                type:"asset", // best default for assets
                parser:{
                    dataUrlCondition:{
                        maxSize:30*1024 // 30kb
                    },
                }
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{publicPath:""}
                    },
                    "css-loader"
                    
                    ],
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({template:"./src/index.html"}),
    ],
    resolve:{
        extensions:[".js",".jsx"]
    },
    devtool:"source-map",
    devServer:{
        port: 8080,
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: true,
    }
}