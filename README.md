# functionify
[![Build Status][travis-image]][travis-url]
[![devDependency Status][david-dev-image]][david-dev-url]
[![Code Coverage][coveralls-image]][coveralls-url]
[![NPM Version][npm-image]][npm-url]

Wraps non-function values in a getter function

## Install

```
$ npm install --save functionify
```

## Usage

```js
var functionify = require('functionify').functionify;

var getter;

getter = functionify('foo');
getter();
//=> 'foo'

getter = functionify(function(){
    return 'bar';
});
getter();
//=> 'bar'

```

## License

MIT © JM Versteeg

[travis-image]: https://img.shields.io/travis/jmversteeg/functionify.svg?style=flat-square
[travis-url]: https://travis-ci.org/jmversteeg/functionify

[david-dev-image]: https://img.shields.io/david/dev/jmversteeg/functionify.svg?style=flat-square
[david-dev-url]: https://david-dm.org/jmversteeg/functionify#info=devDependencies

[coveralls-image]: https://img.shields.io/coveralls/jmversteeg/functionify.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jmversteeg/functionify

[npm-image]: https://img.shields.io/npm/v/functionify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/functionify