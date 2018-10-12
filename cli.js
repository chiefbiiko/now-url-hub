#!/usr/bin/env node

const dpl = require('./index.js')

const cmd = (process.argv[2] || '').toLowerCase()
const k = process.argv[3]
const v = process.argv[4]

switch (cmd) {
  case 'get':
  case 'set':
    console.log(dpl[cmd](k, v))
    process.exit(0)
  default:
    console.error(`invalid cmd: ${cmd}`)
    process.exit(1)
}
