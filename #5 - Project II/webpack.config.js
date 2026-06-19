const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        bundle: "./src/index.ts",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new Dotenv(),
    ],
    mode: "development"
};