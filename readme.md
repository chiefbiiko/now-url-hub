# now-url-hub

[![build status](http://img.shields.io/travis/chiefbiiko/now-url-hub.svg?style=flat)](http://travis-ci.org/chiefbiiko/now-url-hub) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/now-url-hub?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/now-url-hub)

***

A little devops module that helps you figure out and access your OSS now deployment urls.

## Use case

You are deploying on now under the OSS plan. You serve a frontend that does reconnect to your backend, for establishing websockets or similar. Without server side rendering, how do you know your server's address? -> `now-url-hub`.

## Usage

When deploying your server on now you need to run this module's cli in order to post your deployment url under an alias. That way, the `now-url-hub` server always has the latest deployment url:

1. Run `now secrets add nuh_pass <YO PASSWORD>` from a terminal. The password is used to ensure that only you can update the url an alias points to.

2. When running `now` or inside `now.json` pass an alias, and yo password on as environment variables:

``` js
{
  ...,
  "env": {
    "NUH_PASSWORD": "@nuh_pass",
    "NUH_ALIAS": "yo_alias"
  }
}
```

3. Run the `now-url-hub` cli. If you have a `npm` type deployment use `npm`'s prestart script for that. If using docker just RUN the cli with the required environment variables in place.

Accessing a mapping is a simple get from `https://now-url-hub-ipmtcknuik.now.sh/alias/${YO_ALIAS}`; returns a JSON object with properties `alias` and `url`.

***

## Get it!

```
npm install --save now-url-hub
```

***

## License

[MIT](./license.md)