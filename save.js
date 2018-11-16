// meant for node use only

const { request } = require('https')

const NOW_URL_HUB = 'now-url-hub-ipmtcknuik.now.sh' // !

module.exports = (alias, url, password) => {
  return new Promise((resolve, reject) => {
    const req = request({
      host: NOW_URL_HUB,
      port: 41900,
      path: '/mappings',
      method: 'POST'
    }, res => {
      res.statusCode === 200
        ? resolve()
        : reject(`http error ${res.statusCode}`)
    })
    req.once('error', reject)
    req.end(JSON.stringify({ alias, url, password }))
  })
}
