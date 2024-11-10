// webpack.config.js
const webpack = require("webpack");

module.exports = {
	resolve: {
		fallback: {
			buffer: require.resolve("buffer/"),
			crypto: require.resolve("crypto-browserify"),
			util: require.resolve("util/"),
		},
	},
	plugins: [
		new webpack.ProvidePlugin({
			Buffer: ["buffer", "Buffer"],
			process: "process/browser",
		}),
	],
};
