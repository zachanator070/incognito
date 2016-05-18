var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');

module.exports = {
  context: path.resolve(__dirname ,"app"),
  entry: {
    javascript: "./components/App.js",
    html: "./index.html",
    vendor: ["jquery","react","react-router","redux","react-redux",'socket.io-client'],
  },
  output: {
    filename: "./js/app.js",
    path: "./public",
  },
  plugins: [
    new CommonsChunkPlugin("vendor", "./js/vendor.js"),
  ],
  module: {
    loaders: [
      // loader for React JSX
      {
      	test: /\.js$/,
      	exclude: /node_modules/,
      	loader: "babel-loader",
      	query: {
      	   presets: ['react', 'es2015','stage-1']
	      }
      },
      // loader for HTML
      {
      	test: /\.html$/,
      	loader: "file-loader?name=[name].[ext]",
      },
      // loaders for SCSS
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader','sass-loader']
      },
      // loaders for images and font files
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.woff2$|\.eot$/,
        loader: "file-loader?name=assets/[name].[ext]"
      }
    ],
  },
  sassLoader: {
    // include bootstrap when looking for sass modules
    includePaths: [path.resolve(__dirname, "node_modules/bootstrap-sass/assets/stylesheets/")]
  }
}
