const { request } = require('https')

const NOW_URL_HUB = 'nowurlhub-fzaxeragjt.now.sh' // !

module.exports = (alias, url, password) => {
  return new Promise((resolve, reject) => {
    request({
      host: NOW_URL_HUB,
      port: 41900,
      path: '/alias',
      method: 'POST'
    }, res =>
      res.statusCode === 200
        ? resolve()
        : reject(`http error ${res.statusCode}`))
      .once('error', reject)
      .end(JSON.stringify({ alias, url, password }))
  })
}
