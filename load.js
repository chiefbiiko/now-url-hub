const NOW_URL_HUB = 'nowurlhub-fzaxeragjt.now.sh' // !

module.exports = async alias => {
  if (global) var fetch = require('node-fetch')
  const res = await fetch(NOW_URL_HUB)
  return await res.json()
}
