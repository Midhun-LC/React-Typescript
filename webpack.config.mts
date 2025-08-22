import path from "node:path";
import htmlWebpackPlugin from "html-webpack-plugin"

const __dirname = path.resolve();

const config = {
    entry: "./src/index.tsx",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {   
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }

            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
export default config;


