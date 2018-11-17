// meant for node use only

const got = require('got')

const NOW_URL_HUB = require('./package.json').config.NOW_URL_HUB // !

module.exports = async (alias, url, password) => {
  return await got(`https://${NOW_URL_HUB}/mappings`, {
    method: 'POST',
    body: JSON.stringify({ alias, url, password })
  })
}
