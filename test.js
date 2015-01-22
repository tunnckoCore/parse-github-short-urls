/**
 * parse-github-short-urls <https://github.com/tunnckoCore/parse-github-short-urls>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var parseUrls = require('./index');

describe('parse-github-short-urls:', function() {
  describe('should throw', function() {
    it('Error when no arguments', function(done) {
      assert.throws(parseUrls, Error);
      done()
    });

    it('Error when empty string given', function(done) {
      function fixture() {
        parseUrls('')
      }
      assert.throws(fixture, Error);
      done();
    });

    it('TypeError when first argument not String given', function(done) {
      function fixture() {
        parseUrls({})
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });
  describe('should return object with empty fields for missing properties', function(done) {
    it('when string not contain possible pattern', function(done) {
      var actual = parseUrls('some string');
      var fixture = [{
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      }];

      assert.strictEqual(Array.isArray(actual), true);
      assert.strictEqual(actual.length, 1);
      assert.deepEqual(fixture, actual);
      done();
    });

    it('when string not a valid `user/repo` pattern', function(done) {
      var actual = parseUrls('some tunnckoCore!glob2fp#feature string');
      var fixture = [{
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      }];

      assert.strictEqual(Array.isArray(actual), true);
      assert.strictEqual(actual.length, 1);
      assert.deepEqual(fixture, actual);
      done();
    });
  });

  describe('should return', function() {
    it('array with one object that have `user`, `repo` and `branch` properties', function(done) {
      var actual = [{
        user: 'mochajs',
        username: 'mochajs',
        org: 'mochajs',
        organization: 'mochajs',
        repo: 'mocha',
        repository: 'mocha',
        branch: 'feature'
      }];
      var fixture = 'mochajs/mocha#feature';

      assert.strictEqual(Array.isArray(actual), true);
      assert.strictEqual(actual.length, 1);
      assert.strictEqual(actual[0].org, 'mochajs');
      assert.strictEqual(actual[0].repo, 'mocha');
      assert.strictEqual(actual[0].branch, 'feature');
      assert.deepEqual(parseUrls(fixture), actual);
      done()
    });

    it('array with one object with `user` and `repo` properties only', function(done) {
      var actual = [{
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: ''
      }];
      var fixture = 'tunnckoCore/glob2fp';

      assert.strictEqual(Array.isArray(actual), true);
      assert.strictEqual(actual.length, 1);
      assert.strictEqual(actual[0].branch, '');
      assert.strictEqual(actual[0].user, 'tunnckoCore');
      assert.deepEqual(parseUrls(fixture), actual);
      done();
    });

    it('array of multiple objects', function(done) {
      var actual = [{
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: ''
      }, {
        user: 'regexps',
        username: 'regexps',
        org: 'regexps',
        organization: 'regexps',
        repo: 'mentions-regex',
        repository: 'mentions-regex',
        branch: 'bugfix'
      }];
      var fixture = 'tunnckoCore/glob2fp and regexps/mentions-regex#bugfix';

      assert.strictEqual(Array.isArray(actual), true);
      assert.strictEqual(actual.length, 2);
      assert.strictEqual(actual[0].branch, '');
      assert.strictEqual(actual[1].branch, 'bugfix');
      assert.strictEqual(actual[1].user, 'regexps');
      assert.deepEqual(parseUrls(fixture), actual);
      done();
    });
  });
});
