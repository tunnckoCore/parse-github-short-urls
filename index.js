/**
 * parse-github-short-urls <https://github.com/tunnckoCore/parse-github-short-urls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');
var regex = require('github-short-url-regex');
var parseUrl = require('parse-github-short-url');

module.exports = function parseGithubShortUrls(str, opts) {
  if (!str) {
    throw new Error('parse-github-short-urls should have at least 1 arguments');
  }

  if (typeOf(str) !== 'string') {
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
