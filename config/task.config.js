const path = require('path')

module.exports = env => ({
	stamp: Date.now(),

	server: {
		open: false,
		browser: ['google chrome'],
		port: 3000,
		logLevel: 'info',
		watch: true,
		logFileChanges: true,

		watchOptions: {
			ignoreInitial: true,
			ignored: ['**/*.js', '**/*.scss', '!**/*.config.js', '**/*.json']
		},
		files: [
			{
				options: {
					ignored: '**/*.hot-update.json'
				}
			}
		]
		// https: {
		// 	key: path.resolve(process.env.PWD, 'private', 'key.pem'),
		// 	cert: path.resolve(process.env.PWD, 'private', 'cert.pem')
		// }
	},

	js: {
		publicPath: '/dist/js/',
		entries: {
			app:
				env !== 'production'
					? [
						'webpack/hot/dev-server',
						'webpack-hot-middleware/client',
						'./app.js'
					  ]
					: ['./app.js'],
			preview: ['./app.js']
		},
		extensions: ['js', 'json'],
		extractSharedJs: false,
		filename: 'bundle' // no extension
	},

	scss: {
		options: {
			includePaths: [
				path.resolve(process.env.PWD, 'node_modules/normalize-scss/sass'),
				path.resolve(process.env.PWD, 'node_modules/susy/sass')
			]
		},

		postcss: {
			plugins: [
				require('postcss-write-svg')({
					encoding: 'base64'
				}),
				require('postcss-inline-svg')({
					path: path.resolve(process.env.PWD, 'static/img/')
				}),
				require('postcss-animation')(),
				require('postcss-easing-gradients')(),
				require('rucksack-css')(),
				require('tailwindcss')('./src/scss/tailwind.config.js'),
				require('autoprefixer')()
			]
		}
	},

	cssnanoOptions: {},

	critical: {
		minify: true,
		width: 1024,
		height: 768
	},

	purge: {
		whitelistPatterns: [/plyr/, /is-/, /has-/, /no-/, /icon--/, /lazy/]
	}
})
