// meant for browser use only

const NOW_URL_HUB = 'now-url-hub-ipmtcknuik.now.sh' // !

module.exports = async alias => {
  const res = await fetch(`https://${NOW_URL_HUB}/mappings/${alias}`)
  return await res.json()
}
