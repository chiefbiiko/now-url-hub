const { createServer } = require('http')
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
  console.log(`response end; statusCode: ${statusCode}, data: ${data}`)
}

const consume = (readable, cb) => {
  var buf = Buffer.alloc(0)
  readable.once('error', cb)
  readable.on('data', chunk => { buf = Buffer.concat([ buf, chunk ]) })
  readable.once('end', () => {
    try { cb(null, JSON.parse(buf)) }
    catch (err) { cb(err) }
  })
}

const handler = (req, res) => {
  const method = req.method.toLowerCase()
  const pathname = parse(req.url).pathname
  if (!pathname.startsWith('/alias')) {
    return end(res, 404)
  } else if (method === 'get') {
    const alias = pathname.replace(/^.*\/alias\//, '').replace(pathname, '')
    if (!alias) return end(res, 400)
    if (!ALIAS.has(alias)) return end(res, 404)
    return end(res, 200, JSON.stringify({ alias, url: ALIAS.get(alias) }))
  } else if (method === 'post') {
    consume(req, (err, data) => {
      if (err) return end(res, 500)
      if (!areTruStr(data.alias, data.url, data.password)) return end(res, 400)
      if (!PASSW.has(data.alias)) PASSW.set(data.alias, data.password)
      if (data.password !== PASSW.get(data.alias)) return end(res, 401)
      ALIAS.set(data.alias, data.url)
      console.log(`${data.alias} -> ${data.url}`)
      return end(res, 200)
    })
  } else {
    return end(res, 400)
  }
}

const server = createServer(handler)

server.listen(PORT, HOST, () => console.log(`server live @ ${HOST}:${PORT}`))
