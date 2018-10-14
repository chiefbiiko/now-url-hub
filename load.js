// meant for borwser use only

const NOW_URL_HUB = 'nowurlhub-fzaxeragjt.now.sh' // !

module.exports = async alias => {
  const res = await fetch(`https://${NOW_URL_HUB}/alias/${alias}`)
  return await res.json()
}
