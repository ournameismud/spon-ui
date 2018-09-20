const gulp = require('gulp')
const clean = require('./clean')
const fractalServer = require('../fractal/server')
const {
	buildFractal,
	postBuildFractalClean,
	buildComponets
} = require('../fractal/build')
const staticFiles = require('./static')
const scss = require('./scss')
const bundle = require('./javascript')
const purge = require('./purge')
const watch = require('./watch')
const { syncPartials, cacheTags, serverProxy } = require('./cms')
const { sizeReport } = require('../utils/logger')
const validateHtml = require('../utils/htmllint')
const criticalCSS = require('./critical')

const server = global.config === 'cms' ? serverProxy : fractalServer
const defaultTask = gulp.series(clean, staticFiles, scss, watch, server)
const cmsTask = gulp.series(clean, cacheTags, staticFiles, scss, watch, server)

const build = gulp.series(
	clean,
	gulp.parallel(buildComponets, syncPartials, cacheTags, staticFiles, bundle),
	scss,
	purge,
	criticalCSS,
	sizeReport
)

const buildLibrary = gulp.series(
	clean,
	buildFractal,
	gulp.parallel(postBuildFractalClean, cacheTags, staticFiles),
	gulp.parallel(scss, bundle),
	gulp.parallel(purge, validateHtml),
	sizeReport
)

gulp.task(
	'default',
	gulp.task('default', global.config === 'cms' ? cmsTask : defaultTask)
)

gulp.task('build', global.config === 'fractal' ? buildLibrary : build)
