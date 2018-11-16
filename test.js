const tape = require('tape')
const { get } = require('https')
const { save } = require('./index.js')

const NOW_URL_HUB = 'now-url-hub-ipmtcknuik.now.sh' // !

const got = (url, cb) => {
  get(url, res => {
    const chunks = []
    res.on('error', cb)
    res.on('data', chunk => chunks.push(chunk))
    res.on('end', () => cb(null, Buffer.concat(chunks)))
  }).on('error', cb)
}

const load = alias => {
  return new Promise((resolve, reject) => {
    got(`https://${NOW_URL_HUB}/mappings/${alias}`, (err, buf) => {
      try { resolve(JSON.parse(buf)) }
      catch (err) { reject(err) }
    })
  })
}

tape('save and load an alias with the running instance', async t => {
  const alias = 'fraud'
  const url = 'https://fraud-deadbeef.now.sh'
  const password = 'sesameopen'
  await save(alias, url, password)
  t.pass(`${alias} -> ${url} mapping saved`)
  const mapping = await load('fraud')
  t.equal(mapping.alias, alias, 'mapping.alias')
  t.equal(mapping.url, url, 'mapping.url')
  t.end()
})
