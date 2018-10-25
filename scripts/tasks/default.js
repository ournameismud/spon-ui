const gulp = require('gulp')
const clean = require('./clean')
const staticFiles = require('./static')
const scss = require('./scss')
const bundle = require('./javascript')
const purge = require('./purge')
const watch = require('./watch')
const { cacheTags, serverProxy } = require('./cms')
const { sizeReport } = require('../utils/logger')
const criticalCSS = require('./critical')
const server = serverProxy
const defaultTask = gulp.series(
	clean,
	cacheTags,
	staticFiles,
	scss,
	watch,
	server
)

const build = gulp.series(
	clean,
	gulp.parallel(cacheTags, staticFiles, bundle),
	scss,
	purge,
	criticalCSS,
	sizeReport
)

gulp.task('default', gulp.task('default', defaultTask))

gulp.task('build', build)

gulp.task('server', require('./server'))
