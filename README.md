# [parse-github-short-urls][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> **DEPRECATED?** Parse a string of github/npm shorthands into an array of [parse-github-short-url][] objects.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

**DEPRECATED, not use it. The `v2` is just empty function - noop.**  
You may be interested in:

- [limon][] - pluggable lexer.
- [parse-function][] - based on [acorn][], support parsing ES2015/2016 functions.
- [parse-semver][] - seems much like this one.
- [postjson][] - transforming JSON with plugins, may play as post- and pre-processor.

## Install
```
npm i parse-github-short-urls --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const parseGithubShortUrls = require('parse-github-short-urls')
```

## Related
* [limon](https://www.npmjs.com/package/limon): The pluggable JavaScript lexer on per character basis. | [homepage](https://github.com/limonjs/limon)
* [limon-prev-next](https://www.npmjs.com/package/limon-prev-next): Plugin for [limon][] pluggable lexer that adds `prev` and `next` methods. | [homepage](https://github.com/limonjs/limon-prev-next)
* [parse-arguments](https://www.npmjs.com/package/parse-arguments): Parse function to object with same key names as arguments names and… [more](https://www.npmjs.com/package/parse-arguments) | [homepage](https://github.com/tunnckocore/parse-arguments)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)
* [parse-github-short-url](https://www.npmjs.com/package/parse-github-short-url): Parse a github/npm shorthand (user/repo#branch or user/repo@version) URL into an object. | [homepage](https://github.com/tunnckocore/parse-github-short-url)
* [parse-github-url](https://www.npmjs.com/package/parse-github-url): Parse a github URL into an object. | [homepage](https://github.com/jonschlinkert/parse-github-url)
* [parse-semver](https://www.npmjs.com/package/parse-semver): Parse, normalize and validate given semver shorthand (e.g. gulp@v3.8.10) to object. | [homepage](https://github.com/tunnckocore/parse-semver)
* [postjson](https://www.npmjs.com/package/postjson): Transforming JSON with plugins. | [homepage](https://github.com/postjson/postjson)
* [stringify-github-short-url](https://www.npmjs.com/package/stringify-github-short-url): Generate Github / npm shorthand from list of arguments or object. | [homepage](https://github.com/tunnckocore/stringify-github-short-url)
* [stringify-github-url](https://www.npmjs.com/package/stringify-github-url): Generate a GitHub URL from an object. | [homepage](https://github.com/jonschlinkert/stringify-github-url)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/parse-github-short-urls/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[parse-github-short-url]: https://github.com/tunnckocore/parse-github-short-url
[limon]: https://github.com/limonjs/limon
[parse-function]: https://github.com/tunnckocore/parse-function
[acorn]: https://github.com/ternjs/acorn
[parse-semver]: https://github.com/tunnckocore/parse-semver
[postjson]: https://github.com/postjson/postjson

[npmjs-url]: https://www.npmjs.com/package/parse-github-short-urls
[npmjs-img]: https://img.shields.io/npm/v/parse-github-short-urls.svg?label=parse-github-short-urls

[license-url]: https://github.com/tunnckoCore/parse-github-short-urls/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/parse-github-short-urls.svg

[downloads-url]: https://www.npmjs.com/package/parse-github-short-urls
[downloads-img]: https://img.shields.io/npm/dm/parse-github-short-urls.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/parse-github-short-urls
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/parse-github-short-urls.svg

[travis-url]: https://travis-ci.org/tunnckoCore/parse-github-short-urls
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-github-short-urls/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-github-short-urls
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-github-short-urls.svg

[david-url]: https://david-dm.org/tunnckoCore/parse-github-short-urls
[david-img]: https://img.shields.io/david/tunnckoCore/parse-github-short-urls.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

