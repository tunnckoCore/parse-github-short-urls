## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Parse a string (github shorthand urls) into an array of objects

## Install
```bash
npm install parse-github-short-urls
npm test
```


## Related
- [parse-github-short-url][parse-github-short-url]
- [parse-github-short-urls][parse-github-short-url]
- [github-short-url-regex][github-short-url-regex]


## API
> For more use-cases see the [tests](./test.js)

### [.parseGithubShortUrl](./index.js#L57)
> Parse github short url to array of objects

- `<str>` **{String}** string to parse for `user/repo#branch`  
- `[opts]` **{Object}** options are passed to [github-short-url-regex][github-short-url-regex]  
- `returns` **{Array}**  

**Example:**

```js
var parseGithubShortUrls = require('parse-github-short-urls');
parseGithubShortUrls('tunnckoCore/glob2fp#master');
//=> [{
//  user: 'tunnckoCore',
//  username: 'tunnckoCore',
//  org: 'tunnckoCore',
//  organization: 'tunnckoCore',
//  repo: 'glob2fp',
//  repository: 'glob2fp',
//  branch: 'master'
//}];
 *
parseGithubShortUrls('tunnckoCore/glob2fp#master and mochajs/mocha#feature');
//=> [{
//  user: 'tunnckoCore',
//  username: 'tunnckoCore',
//  org: 'tunnckoCore',
//  organization: 'tunnckoCore',
//  repo: 'glob2fp',
//  repository: 'glob2fp',
//  branch: 'master'
//}, {
//  user: 'mochajs',
//  username: 'mochajs',
//  org: 'mochajs',
//  organization: 'mochajs',
//  repo: 'mocha',
//  repository: 'mocha',
//  branch: 'feature'
//}];
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/parse-github-short-urls
[npmjs-img]: https://img.shields.io/npm/v/parse-github-short-urls.svg?style=flat&label=parse-github-short-urls

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-github-short-urls?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-github-short-urls.svg?style=flat

[license-url]: https://github.com/tunnckoCore/parse-github-short-urls/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/parse-github-short-urls
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-github-short-urls.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/parse-github-short-urls
[daviddm-img]: https://img.shields.io/david/tunnckoCore/parse-github-short-urls.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/parse-github-short-urls/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 22, 2015_


[github-short-url-regex]: https://github.com/tunnckoCore/github-short-url-regex
[parse-github-short-url]: https://github.com/tunnckoCore/parse-github-short-url
[parse-github-short-urls]: https://github.com/tunnckoCore/parse-github-short-urls