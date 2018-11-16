// meant for node use only

const got = require('got')

const NOW_URL_HUB = 'now-url-hub-ipmtcknuik.now.sh' // !

module.exports = async (alias, url, password) => {
  return await got('https://now-url-hub-ipmtcknuik.now.sh/mappings', {
    method: 'POST',
    body: JSON.stringify({ alias, url, password })
  })
}
