// https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html

let config = {
    // Le point d'entrée est le module que webpack utilise pour commencer à construire son graphe de dépendance interne
    entry: "./src/index.js",
    // Point de sortie => ./public
    // Fichier de résultat => bundle.js
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    }
}

module.exports = config;

