const requireDir = require('require-dir')
const log = require('fancy-log')
const c = require('ansi-colors')
const argList = require('./scripts/utils/argv')
const TASK = require('./config/task.config')
const PATHS = require('./config/path.config.json')
const { env } = argList(process.argv)

global.env = env || 'development'
global.config = 'default'
global.PRODUCTION = global.env === 'production'
global.TASK = TASK(env)
global.PATHS = PATHS
// after the above, some globals are used
global.WEBPACK_CONFIG = require('./scripts/webpack/config.base')

const color = 'blue'

log(`${c[color](` 

             _/_/_/  _/_/_/      _/_/    _/_/_/    
          _/_/      _/    _/  _/    _/  _/    _/   
             _/_/  _/    _/  _/    _/  _/    _/    
        _/_/_/    _/_/_/      _/_/    _/    _/     
                 _/                                
                _/       
        	`)}
	
	ENV: ${c.bold[color](global.env)}, CONFIG: ${c.bold[color](global.config)}\n
	`)

requireDir('./scripts/tasks', {
	recurse: true
})
