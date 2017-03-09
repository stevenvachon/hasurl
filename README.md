# hasurl [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Determine whether Node.js' native [WHATWG `URL`](https://nodejs.org/api/url.html#url_the_whatwg_url_api) implementation is available.


Optionally, detect *functioning* experimental implementations in Node 7.x


## Installation

[Node.js](http://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install hasurl
```


## Usage

```js
const hasURL = require('hasurl');

if (hasURL()) {
	// bleeding edge stuff
} else {
	// url.parse fallback
}
```

If you want to support the experimental implementations (not recommended unless you really know what you're doing), pass a `true` argument:

```js
if (hasURL(true)) {
	// bleeding edge stuff
} else {
	// url.parse fallback
}
```


[npm-image]: https://img.shields.io/npm/v/hasurl.svg
[npm-url]: https://npmjs.org/package/hasurl
[travis-image]: https://img.shields.io/travis/stevenvachon/hasurl.svg
[travis-url]: https://travis-ci.org/stevenvachon/hasurl
