// https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html

// Point d'entrée => index.js
// Point de sortie => bundle.js
let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    }
}

module.exports = config;

