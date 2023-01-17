const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode="development";
if(process.env.NODE_ENV==="production"){
    mode="production";
}
module.exports={
    mode:mode,
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
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
        new MiniCssExtractPlugin()
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