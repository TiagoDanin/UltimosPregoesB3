#!/usr/bin/env node

const path = require('path')
const reload = require('reload')
const helpers = require('handlebars-helpers')()
const argv = require('minimist')(process.argv)
const exphbs = require('express-handlebars')
const express = require('express')

const port = argv.port || process.env.PORT || process.env.port || 3000
const isDevMode = argv.dev

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	partialsDir: path.join(__dirname, 'views/partials'),
	layoutsDir: path.join(__dirname, 'views/layouts'),
	helpers: {
		...helpers,
		console: text => console.log(text)
	}
})

app.engine('handlebars', hbs.engine)

app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')
app.set('trust proxy', 1)

if (!isDevMode) {
	app.enable('view cache')
}

app.use('/uikit', express.static(path.join(path.dirname(require.resolve('uikit')), '..')))
app.use('/css', express.static(path.join(__dirname, 'css')))

// Routes
app.use('/', require('./routes/dashboard'))

app.listen(app.get('port'), () => {
	console.log(`[!] Open browser: http://localhost:${app.get('port')} or YOU_IP:${app.get('port')}`)
})

if (isDevMode) {
	reload(app)
}
