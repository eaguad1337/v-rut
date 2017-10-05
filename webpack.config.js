module.exports = {
	entry: __dirname + '/src/v-rut.js',
	output: {
		path: __dirname + '/dist',
		filename: 'v-rut.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}