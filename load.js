// meant for browser use only

const NOW_URL_HUB = require('./package.json').config.NOW_URL_HUB // !

module.exports = async alias => {
  const res = await fetch(`https://${NOW_URL_HUB}/mappings/${alias}`)
  return await res.json()
}
