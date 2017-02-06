module.exports = {
	entry: './app.js',
	output: {
		filename: './build.js'
	},
	watch: true,
	module: {
		preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules$/,
				query: {
					presets: ['es2015']
				}
			}

		],
	}
};