module.exports = {
  get (k) {
   // TODO: get v<-k from some kind of browser-accesible dht
   const v = undefined
   return v
  },
  set (k, v = process.env.NOW_URL) { // void
    if (!k || !v) return
    // TODO: set k->v in some kind of browser-acceesible dht
  }
}
