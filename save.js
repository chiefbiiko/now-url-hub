const { readFileSync, writeFileSync, existsSync } = require('fs')
const { join } = require('path')

const CONF_FILE = join(process.env.USERPROFILE, 'dpl_now_url.json')

module.exports = () => {
  var url
  if (!existsSync(CONF_FILE)) {
    // TODO: post to myjsonapi and save url
    url = undefined
    writeFileSync(CONF_FILE, JSON.stringify({ myjsonstore: url }))
  } else {
    url = JSON.parse(readFileSync(CONF_FILE)).myjsonstore
  }
  
  return async save (k, v = process.env.NOW_URL) => {
    // TODO: put to majsonstore
  }
}
