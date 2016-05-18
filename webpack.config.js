var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

console.log("CURRENT DIR IS "+__dirname);

module.exports = {
  context: __dirname + "/app",
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
      	loader: "file?name=[name].[ext]",
      },
      // loaders for Bootstrap CSS
      {test: /\.css$/,loader: 'style-loader!css-loader'},
      {test: /\.scss$/,loader: 'url-loader!file-loader!style-loader!css-loader!sass-loader'},
      {test: /\.less$/,loader: 'style-loader!css-loader!less-loader'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"url-loader?name=assets/[name].[ext]&prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=image/svg+xml" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ],
  },
  /*sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules/bootstrap-sass/assets/stylesheets/")]
  }*/
}
