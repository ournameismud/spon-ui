# Spon-ui

## UI components built with tailwind, Gulp 4 and Webpack.

### Features

- Code splitting - via webpack
- Babel 7
- Gulp 4
- scss / postcss
- Remove unused css - via purges
- SVG symbols
- Handle any static file type, compress images, css, etc
- Integration with craftcms - via ournameismud/fractal
- eslint
- stylelint
- htmlhint
- prettier
- jest
- backstopjs - regression tests

## Getting started

- clone the repo
- install the dependencies (npm install / yarn)
- run `npm run gen-cert` to create https tokens
- `npm run start` will boot up the cms server
- `npm run build` will create a production build to use with craftcms

### Directory structure

- `src/js/app.js` main entry point for webpack
- `src/scss/style.scss` main scss file, includes tailwind imports
- `deploy` craftcms lives here
- `deploy/public` the public root folder
- `tmp` used in dev mode, ie `npm start`

### Dev mode

###### Start cms server

`npm start`

###### Create a production build

`npm run build`

###### Run any tests with jest

`npm run test`

###### Run tests in watch mode

`npm run test:watch`

###### Get a test coverage report

`npm run coverage`

### Deployment (netlify)

###### If you have netlify setup, you can deploy the fractal library with this

`npm run deploy`

### https

###### Create https certs for browsersync

`npm run gen-cert`

### Linting/formatting

###### Lint all the javascript feels

`npm run lint:js`

###### Format all the code with prettier

`npm run pretty`

###### Generate documentation

`npm run generate-docs`
