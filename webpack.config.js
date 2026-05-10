import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    plugins: [
            new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        historyApiFallback: true,
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules: [
            {
                // this lets us import files without .js extension mentioned
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false,
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // {
            //     test: /\.svg$/,
            //     use: 'svg-url-loader'
            // }
        ],
    },
};