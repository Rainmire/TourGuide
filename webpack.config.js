var path = require(“path”);

module.exports = {
 context: __dirname,
 entry: “./tour_guide.jsx”,
 output: {
   path: path.resolve(__dirname),
   filename: “bundle.js”
 },
 devtool: ‘source-map’,
 resolve: {
   extensions: [“.js”, “.jsx”, “*”]
 }
};
