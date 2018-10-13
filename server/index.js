const turbo = require('turbo-http')
const { parse } = require('url')

const PORT = parseInt(process.env.PORT) || 41900
const HOST = process.env.HOST || '0.0.0.0'

const ALIAS = new Map()
const PASSW = new Map()

const areTruStr = (...xyz) => {
  if (!xyz.length) return
  else return xyz.every(x => x && typeof x === 'string')
}

const end = (res, statusCode, data) => {
  res.statusCode = statusCode
  res.end(data)
}

const consume = (readable, cb) => {
  var buf = Buffer.alloc(0)
  readable
    .once('error', cb)
    .on('data', chunk => { buf = Buffer.concat([ buf, chunk ]) })
    .once('end', () => {
      try { cb(null, JSON.parse(buf)) }
      catch (err) { cb(err) }
    })
}

const handler = (req, res) => {
  const pathname = parse(req.url).pathname
  if (!pathname.startsWith('/alias')) {
    return end(res, 404)
  } else if (req.method === 'get') {
    const alias = pathname.replace(/^.+\/alias\//, '').replace(pathname, '')
    if (!alias) return end(res, 400)
    if (!ALIAS.has(alias)) return end(res, 404)
    return end(res, 200, JSON.stringify({ url: ALIAS.get(alias) }))
  } else if (req.method === 'post') {
    consume(req, (err, data) => {
      if (err) return end(res, 500)
      if (!areTruStr(data.alias, data.url, data.password)) return end(res, 400)
      if (!PASSW.has(data.alias)) PASSW.set(data.alias, data.password)
      else if (data.password !== PASSW.get(data.alias)) return end(res, 401)
      ALIAS.set(data.alias, data.url)
      return end(res, 200)
    })
  } else {
    return end(res, 400)
  }
}

const server = turbo.createServer(handler)

server.listen(PORT, HOST, () => console.log(`server live @ ${HOST}:${PORT}`))
