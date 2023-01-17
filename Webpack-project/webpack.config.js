const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode="development";
let target="web";
if(process.env.NODE_ENV==="production"){
    mode="production";
}
module.exports={
    mode:mode,
    target:target,
    output:{
        assetModuleFilename:"images/[hash][ext][query]"
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif)$/i,
                type:"asset",
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