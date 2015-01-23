/**
 * parse-github-short-urls <https://github.com/tunnckoCore/parse-github-short-urls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var regex = require('github-short-url-regex');
var parseUrl = require('parse-github-short-url');

/**
 * Parse github short url to array of objects
 *
 * **Example:**
 *
 * ```js
 * var parseGithubShortUrls = require('parse-github-short-urls');
 * parseGithubShortUrls('tunnckoCore/glob2fp#master');
 * //=> [{
 * //  user: 'tunnckoCore',
 * //  username: 'tunnckoCore',
 * //  org: 'tunnckoCore',
 * //  organization: 'tunnckoCore',
 * //  repo: 'glob2fp',
 * //  repository: 'glob2fp',
 * //  branch: 'master'
 * //}];
 *
 * parseGithubShortUrls('tunnckoCore/glob2fp#master and mochajs/mocha#feature');
 * //=> [{
 * //  user: 'tunnckoCore',
 * //  username: 'tunnckoCore',
 * //  org: 'tunnckoCore',
 * //  organization: 'tunnckoCore',
 * //  repo: 'glob2fp',
 * //  repository: 'glob2fp',
 * //  branch: 'master'
 * //}, {
 * //  user: 'mochajs',
 * //  username: 'mochajs',
 * //  org: 'mochajs',
 * //  organization: 'mochajs',
 * //  repo: 'mocha',
 * //  repository: 'mocha',
 * //  branch: 'feature'
 * //}];
 * ```
 *
 * @name parseGithubShortUrls
 * @param  {String} `<str>` string to parse for `user/repo#branch`
 * @param  {Object} `[opts]` options are passed to [github-short-url-regex][github-short-url-regex]
 * @return {Array}
 * @api public
 */
module.exports = function parseGithubShortUrls(str, opts) {
  if (!str) {
    throw new Error('parse-github-short-urls should have at least 1 arguments');
  }

  if (typeof str !== 'string') {
    throw new TypeError('parse-github-short-urls: expect `str` be string');
  }

  opts = opts || {exact: false};

  var re = regex(opts);

  if (re.test(str)) {
    var lines = [];
    var match = null;

    while ((match = re.exec(str)) !== null) {
      lines.push(match[0])
      str = str.replace(match[0], '')
    }

    return lines.reduce(function(urls, line) {
      return urls.concat(parseUrl(line));
    }, []);
  }

  return [{
    user: '',
    username: '',
    org: '',
    organization: '',
    repo: '',
    repository: '',
    branch: ''
  }];
};
