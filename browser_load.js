(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// meant for browser use only

const NOW_URL_HUB = require('./package.json').config.NOW_URL_HUB // !

module.exports = async alias => {
  const res = await fetch(`https://${NOW_URL_HUB}/mappings/${alias}`)
  return await res.json()
}

},{"./package.json":2}],2:[function(require,module,exports){
module.exports={
  "name": "now-url-hub",
  "version": "0.1.0",
  "description": "easily manage ur oss now deployment urls",
  "main": "./index.js",
  "bin": {
    "now-url-hub": "./cli.js"
  },
  "unpkg": "./browser_load.js",
  "scripts": {
    "test": "tape ./test.js",
    "browser-build": "browserify ./load.js > ./browser_load.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/chiefbiiko/now-url-hub.git"
  },
  "keywords": [
    "now",
    "now-cli",
    "zeit",
    "deployment",
    "url",
    "dev-ops"
  ],
  "author": "Noah Anabiik Schwarz",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/chiefbiiko/now-url-hub/issues"
  },
  "homepage": "https://github.com/chiefbiiko/now-url-hub#readme",
  "dependencies": {
    "got": "^9.3.2",
    "minimist": "^1.2.0"
  },
  "devDependencies": {
    "browserify": "^16.2.3",
    "debug": "^4.1.0",
    "tape": "^4.9.1"
  },
  "config": {
    "NOW_URL_HUB" : "now-url-hub-oykrbcgrny.now.sh"
  }
}

},{}]},{},[1]);
