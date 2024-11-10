const webpack = require("webpack");

module.exports = function override(config) {
	config.resolve.fallback = {
		...config.resolve.fallback,
		crypto: require.resolve("crypto-browserify"),
		vm: require.resolve("vm-browserify"),
		stream: require.resolve("stream-browserify"),
		buffer: require.resolve("buffer"),
		util: require.resolve("util/"),
		process: require.resolve("process/browser.js"), // Explicit path for process
	};

	config.plugins = (config.plugins || []).concat([
		new webpack.ProvidePlugin({
			process: "process/browser.js",
			Buffer: ["buffer", "Buffer"],
		}),
	]);

	return config;
};
