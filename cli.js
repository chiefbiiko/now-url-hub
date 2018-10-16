#!/usr/bin/env node

const { save } = require('./index.js')

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    version: 'v',
    help: 'h'
  }
})

if (argv.version) {
  console.log(require('./package.json').version)
  process.exit(0)
}

if (argv.help) {
  console.log('...') // TODO: HELP
  process.exit(0)
}

const alias = argv.alias || process.env.NUH_ALIAS
const url = argv.url || process.env.NOW_URL
const password = argv.password || process.env.NUH_PASSWORD

save(alias, url, password)
  .then(() => console.log(`${alias} -> ${url} mapping saved successfully`))
  .catch(err => console.error(err) && process.exit(1))
