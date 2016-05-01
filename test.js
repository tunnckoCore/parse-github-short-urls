/*!
 * parse-github-short-urls <https://github.com/tunnckoCore/parse-github-short-urls>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var parseGithubShortUrls = require('./index')

test('parse-github-short-urls:', function (done) {
  parseGithubShortUrls()
  done()
})
